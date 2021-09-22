#!/usr/bin/python3
from flask import Flask, request, render_template,jsonify
import os, sys
from sh import python3
from time import sleep

import signal

app = Flask(__name__)
app.secret_key = "pioneer"

workspace = ""
msgs = []
HOME = "/home/ubuntu/pioneer-bricks/static/"

process = None

def my_print(data):
    global msgs
    msgs.append(data)

def code_run():
    global process
    process = python3(f"{HOME}static/save/tmp/tmp.py",_out=my_print, _bg=True)
    
def transform_code(code):
    return "#!/usr/bin/python3\nimport rospy\nfrom rospy import ServiceProxy\nfrom std_srvs.srv import Empty\nfrom std_msgs.msg import Int32\nfrom gs_navigation import *\nfrom gs_board import *\nfrom gs_flight import *\nfrom gs_module import *\nfrom gs_sensors import *\nfrom gs_logger import *\nprint(\"Начало программы\")\ndef callback(data):\n\tpass\nrospy.init_node(\"pioneer_bricks_node\")\nflight = FlightController(callback)\nboard = BoardManager()\nled_b = BoardLedController()\nled_m = ModuleLedController()\nsensors=SensorManager()\nlog = Logger()\nnavigation = NavigationManager()\nled_b.changeAllColor(0,0,0)\nled_m.changeAllColor(0,0,0)\n" + code + "print(\"Конец программы\")"

@app.route("/stop", methods=['POST'])
def stop():
    global process
    if process is not None:
        process.signal(signal.SIGINT)
        process = None
    return "ok"

@app.route('/')
def block():
    global workspace
    return render_template("index.html",xml_text=workspace,hostn=hostname,port=port)

def save_to_file(workspace, name, code):
    if name != "#@#":
        path = os.path.join(f"{HOME}static/save/", name)
        os.mkdir(path)
        with open(f"{path}/{name}.xml","w") as f:
            f.write(workspace)
        with open(f"{path}/{name}.py","w") as f:
            f.write(transform_code(code))
        return 0
    else:
        return 1

def delete():
    os.remove(f"{HOME}static/save/tmp/tmp.py")
    os.remove(f"{HOME}static/save/tmp/tmp.xml")
    os.rmdir(f"{HOME}static/save/tmp")

@app.route('/run', methods=['POST'])
def run():
    global workspace
    workspace = request.form['xml_text']
    try:
        delete()
    except:
        pass
    if save_to_file(workspace, "tmp", request.form['code']) == 0:
        code_run()
        
    return "ok"

@app.route('/save',methods=['POST'])
def save():
    global workspace
    workspace = request.form['xml_text']
    name = request.form['name']
    code = request.form['code']
    jsonify(status = save_to_file(workspace, name, code))
    

@app.route('/new',methods=['POST'])
def new():
    global workspace
    workspace = ""
    return "ok"

@app.route('/open',methods=['POST'])
def o():
    global workspace
    name = request.form['name']
    try:
        with open(f"{HOME}static/save/{name}/{name}.xml","r") as f:
            workspace = f.readline()
    except:
        workspace = request.form['xml_text']
        return jsonify(error=1)
    return jsonify(error=0)

@app.route("/files")
def files():
    dirs = os.listdir(f"{HOME}static/save/.")
    data = ""
    for i in dirs:
        if i != '.save_directory':
            data = data + i + ","
    if len(data[0:len(data) - 1]) == 0:
        return jsonify(name = "#@#")
    else:
        return jsonify(name = data[0:len(data)-1])

@app.route("/print")
def pr():
    global msgs
    try:
        msg = msgs[0]
        msgs.pop(0)
        return jsonify(msg = msg)
    except:
        return jsonify(msg = "none")

try:
    argv = sys.argv
    sleep(10)
    port = 2020
    hostname = os.popen('ip addr show {}'.format(argv[argv.index('--interface')+1])).read().split("inet ")[1].split("/")[0]
    app.run(host = hostname, port = port)
except:
    pass