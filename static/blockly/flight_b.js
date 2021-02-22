Blockly.Blocks['update_yaw'] = {
  init: function() {
    this.appendValueInput("YAW")
        .setCheck("Number")
        .appendField("Обновить угол на");
    this.appendDummyInput()
        .appendField("радиан");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_to_point'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Лететь в глобальные координаты");
    this.appendValueInput("LAT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Широта");
    this.appendValueInput("LONG")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Долгота");
    this.appendValueInput("ALT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Высота над уровнем моря");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_local_point'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Лететь в локальные координаты");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("Z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z");
    this.appendValueInput("TIME")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Время");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['callback'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Обработка событий автопилота");
      this.appendStatementInput("COPTER_LANDED")
          .setCheck(null)
          .appendField("Приземлился");
      this.appendStatementInput("LOW_VOLTAGE1")
          .setCheck(null)
          .appendField("Заряда хватит на возврат");
      this.appendStatementInput("LOW_VOLTAGE2")
          .setCheck(null)
          .appendField("Экстренная посадка");
      this.appendStatementInput("POINT_REACHED")
          .setCheck(null)
          .appendField("Точка достигнута");
      this.appendStatementInput("POINT_DECELERATION")
          .setCheck(null)
          .appendField("Близко к заданной точке");
      this.appendStatementInput("TAKEOFF_COMPLETE")
          .setCheck(null)
          .appendField("Взлет выполнен");
      this.appendStatementInput("ENGINES_STARTED")
          .setCheck(null)
          .appendField("Двигатели запущены");
      this.appendStatementInput("SHOCK")
          .setCheck(null)
          .appendField("Сильный удар");
      this.setColour(210);
      this.setNextStatement(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};