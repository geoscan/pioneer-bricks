Blockly.Python['update_yaw'] = function(block) {
  var value_yaw = Blockly.Python.valueToCode(block, 'YAW', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'flight.updateYaw('+value_yaw+')\n';
  return code;
};

Blockly.Python['go_to_point'] = function(block) {
  var value_lat = Blockly.Python.valueToCode(block, 'LAT', Blockly.Python.ORDER_ATOMIC);
  var value_long = Blockly.Python.valueToCode(block, 'LONG', Blockly.Python.ORDER_ATOMIC);
  var value_alt = Blockly.Python.valueToCode(block, 'ALT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'flight.goToPoint('+value_lat+','+value_long+','+value_alt+')\n';
  return code;
};

Blockly.Python['go_local_point'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'Z', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'flight.goToLocalPoint('+value_x+','+value_y+','+value_z+','+value_time+')\n';
  return code;
};

Blockly.Python['callback'] = function(block) {
  var statements_landing = Blockly.Python.statementToCode(block, 'COPTER_LANDED');
  var statements_low_voltage1 = Blockly.Python.statementToCode(block, 'LOW_VOLTAGE1');
  var statements_low_voltage2 = Blockly.Python.statementToCode(block, 'LOW_VOLTAGE2');
  var statements_point_reached = Blockly.Python.statementToCode(block, 'POINT_REACHED');
  var statements_point_deceleration = Blockly.Python.statementToCode(block, 'POINT_DECELERATION');
  var statements_takeoff_complete = Blockly.Python.statementToCode(block, 'TAKEOFF_COMPLETE');
  var statements_engines_started = Blockly.Python.statementToCode(block, 'ENGINES_STARTED');
  var statements_shock = Blockly.Python.statementToCode(block, 'SHOCK');
  // TODO: Assemble Python into code variable.
  var code =
`
def callback(event):
  event = event.data
  if event == CallbackEvent.COPTER_LANDED:
  ${statements_landing}
    pass
  elif event == CallbackEvent.LOW_VOLTAGE1:
  ${statements_low_voltage1}
    pass
  elif event == CallbackEvent.LOW_VOLTAGE2:
  ${statements_low_voltage2}
    pass
  elif event == CallbackEvent.POINT_REACHED:
  ${statements_point_reached}
    pass
  elif event == CallbackEvent.POINT_DECELERATION:
  ${statements_point_deceleration}
    pass
  elif event == CallbackEvent.TAKEOFF_COMPLETE:
  ${statements_takeoff_complete}
    pass
  elif event == CallbackEvent.ENGINES_STARTED:
  ${statements_engines_started}
    pass
  elif event == CallbackEvent.SHOCK:
  ${statements_shock}
    pass
flight = FlightController(callback)
`;
  return code;
};