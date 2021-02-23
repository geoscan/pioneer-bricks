#!/usr/bin/python3
from flask import Flask, request, render_template, flash, redirect, url_for,jsonify
import os
import rospy
import sys
from gs_board import BoardManager
from gs_flight import FlightController
from gs_module import ModuleLedController, BoardLedController, CargoController
from gs_sensors import SensorManager
from gs_logger import Logger
from time import sleep

app = Flask(__name__)
app.secret_key = "pioneer"

workspace = ""
msgs = []

def my_print(data):
    global msgs
    msgs.append(data)


def code_run(code):
    rospy.init_node("pioneer_bricks_node", disable_signals = True)
    board = BoardManager()
    led_b = BoardLedController()
    led_m = ModuleLedController()
    sensors = SensorManager()
    cargo = CargoController()
    log = Logger()
    led_b.changeAllColor(0,0,0)
    led_m.changeAllColor(0,0,0)
    print = my_print
    msgs.append("Начало программы")
    exec(code)
    msgs.append("Конец программы")
    rospy.signal_shutdown("end code")

def transform_code(code):
    return "#!/usr/bin/python3\nimport rospy\nfrom gs_board import *\nfrom gs_flight import *\nfrom gs_module import *\nfrom gs_sensors import *\nfrom gs_logger import *\nrospy.init_node(\"pioneer_bricks_node\")\nboard = BoardManager()\nled_b=BoardLedController()\nled_m=ModuleLedController()\nsensors=SensorManager()\nlog=Logger()\nled_b.changeAllColor(0,0,0)\nled_m.changeAllColor(0,0,0)\n"+code

@app.route('/')
def block():
    global workspace
    return render_template("index.html",xml_text=workspace,hostn=hostname,port=port)

@app.route('/run', methods=['POST'])
def run():
    global workspace
    workspace = request.form['xml_text']
    code_run(request.form['code'])
    return "ok"

@app.route('/save',methods=['POST'])
def save():
    global workspace
    workspace = request.form['xml_text']
    name = request.form['name']
    code = request.form['code']
    if name != "#@#":
        path = os.path.join("/home/ubuntu/pioneer-bricks/static/save/", name)
        os.mkdir(path)
        with open("{}/{}.xml".format(path, name),"w") as f:
            f.write(workspace)
        with open("{}/{}.py".format(path, name),"w") as f:
            f.write(transform_code(code))
        return jsonify(status=0)
    else:
        return jsonify(status=1)

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
        with open("/home/ubuntu/pioneer-bricks/static/save/{}/{}.xml".format(name, name),"r") as f:
            workspace = f.readline()
    except:
        workspace = request.form['xml_text']
        return jsonify(error=1)
    return jsonify(error=0)

@app.route("/files")
def files():
    dirs = os.listdir("/home/ubuntu/pioneer-bricks/static/save/.")
    data = ""
    for i in dirs:
        if(i!='.save_directory'):
            data=data+i+","
    if len(data[0:len(data)-1]) == 0:
        return jsonify(name="#@#")
    else:
        return jsonify(name=data[0:len(data)-1])

@app.route("/print")
def pr():
    global msgs
    try:
        msg = msgs[0]
        msgs.pop(0)
        return jsonify(msg=msg)
    except:
        return jsonify(msg="none")

try:
    argv = sys.argv
    sleep(10)
    port = 2020
    hostname = os.popen('ip addr show {}'.format(argv[argv.index('--interface')+1])).read().split("inet ")[1].split("/")[0]
    app.run(host=hostname,port=port)
except:
    pass
