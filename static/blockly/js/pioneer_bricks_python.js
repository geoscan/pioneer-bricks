// Board

Blockly.Python['run_status'] = function(block) {
    var code = 'board.runStatus()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['board_number'] = function(block) {
    var code = 'board.boardNumber()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['time'] = function(block) {
    var code = 'board.time()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['delta_time'] = function(block) {
    var code = 'board.deltaTime()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['launch_time'] = function(block) {
    var code = 'board.launchTime()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

// Flight

Blockly.Python['take_off'] = function(block) {
    var code = 'flight.takeoff()\nwhile rospy.wait_for_message("geoscan/flight/callback_event", Int32).data != CallbackEvent.TAKEOFF_COMPLETE:\n\tpass\n';
    return code;
};
  
Blockly.Python['preflight'] = function(block) {
    var code = 'flight.preflight()\nwhile rospy.wait_for_message("geoscan/flight/callback_event", Int32).data != CallbackEvent.ENGINES_STARTED:\n\tpass\n';
    return code;
};
  
Blockly.Python['landing'] = function(block) {
    var code = 'flight.landing()\nwhile rospy.wait_for_message("geoscan/flight/callback_event", Int32).data != CallbackEvent.COPTER_LANDED:\n\tpass\n';
    return code;
};
  
Blockly.Python['engines_disarm'] = function(block) {
    var code = 'flight.engines_disarm()\n';
    return code;
};

Blockly.Python['update_yaw'] = function(block) {
    var value_yaw = Blockly.Python.valueToCode(block, 'YAW', Blockly.Python.ORDER_ATOMIC);
    var code = `flight.updateYaw(${value_yaw})\n`;
    return code;
};
  
Blockly.Python['go_to_point'] = function(block) {
    var value_lat = Blockly.Python.valueToCode(block, 'LAT', Blockly.Python.ORDER_ATOMIC);
    var value_long = Blockly.Python.valueToCode(block, 'LONG', Blockly.Python.ORDER_ATOMIC);
    var value_alt = Blockly.Python.valueToCode(block, 'ALT', Blockly.Python.ORDER_ATOMIC);
    var code = `flight.goToPoint(${value_lat}, ${value_long},${value_alt})\nwhile rospy.wait_for_message("geoscan/flight/callback_event", Int32).data != CallbackEvent.POINT_REACHED:\n\tpass\n`;
    return code;
};
  
Blockly.Python['go_local_point'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
    var value_z = Blockly.Python.valueToCode(block, 'Z', Blockly.Python.ORDER_ATOMIC);
    var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
    var code = `flight.goToLocalPoint(${value_x}, ${value_y}, ${value_z}, ${value_time})\nwhile rospy.wait_for_message("geoscan/flight/callback_event", Int32).data != CallbackEvent.POINT_REACHED:\n\tpass\n`;
    return code;
};

// Module

Blockly.Python['board_change'] = function(block) {
    var value_nub = Blockly.Python.valueToCode(block, 'NUB', Blockly.Python.ORDER_ATOMIC);
    var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var value_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    var code = `led_b.changeColor(${value_nub}, ${value_r}, ${value_g}, ${value_b})\n`;
    return code;
};
  
Blockly.Python['module_change'] = function(block) {
    var value_num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
    var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var value_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    var code = `led_m.changeColor(${value_num}, ${value_r}, ${value_g}, ${value_b})\n`;
    return code;
};
  
Blockly.Python['board_all'] = function(block) {
    var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var value_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    var code = `led_b.changeAllColor(${value_r}, ${value_g}, ${value_b})\n`;
    return code;
};
  
Blockly.Python['module_all'] = function(block) {
    var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var value_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    var code = `led_m.changeAllColor(${value_r}, ${value_g}, ${value_b})\n`;
    return code;
};
  
Blockly.Python['cargo'] = function(block) {
    var dropdown_state = block.getFieldValue('STATE');
    var state = '';
    if (dropdown_state == 'включить')
    {
      state = 'on';
    }else{
      state = 'off';
    };
    var code = `cargo.${state}()\n`;
    return code;
};
  
Blockly.Python['cargo_led'] = function(block) {
    var value_num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
    var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var value_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    var code = `cargo.changeColor(${value_r}, ${value_g}, ${value_b}, ${value_num})\n`;
    return code;
};
  
Blockly.Python['cargo_led_all'] = function(block) {
    var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var value_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    var code = `cargo.changeAllColor(${value_r}, ${value_g}, ${value_b})\n`;
    return code;
};

// Navigation

Blockly.Python['lps_position'] = function(block) {
    var code = 'navigation.lps.position()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['lps_velocity'] = function(block) {
    var code = 'navigation.lps.velocity()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['lps_yaw'] = function(block) {
    var code = 'navigation.lps.yaw()\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
// Sensors

Blockly.Python['gyro'] = function(block) {
    var code = 'sensors.gyro()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['accel'] = function(block) {
    var code = 'sensors.accel()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['orientation'] = function(block) {
    var code = 'sensors.orientation()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['altitude'] = function(block) {
    var code = 'sensors.altitude()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['range'] = function(block) {
    var code = 'sensors.range()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

// Logger

Blockly.Python['log_last'] = function(block) {
    var code = 'log.lastMsgs()\n';
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['log_all'] = function(block) {
    var code = 'log.allMsgs()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

// Utils

Blockly.Python['sleep'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = `sleep(${value_name})\n`;
    return code;
};

Blockly.Python['make_photo'] = function(block) {
    var code = 'ServiceProxy("geoscan/make_photo", Empty)()\n';
    return code;
};