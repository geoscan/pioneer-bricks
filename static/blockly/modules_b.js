Blockly.Blocks['board_change'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Поменять цвет светодиода на плате");
    this.appendValueInput("NUB")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Номер лампочки");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Красный");
    this.appendValueInput("G")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Зеленый");
    this.appendValueInput("B")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Синий");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['module_change'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Поменять цвет светодиода на модуле");
    this.appendValueInput("NUM")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Номер лампочки");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Красный");
    this.appendValueInput("G")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Зеленый");
    this.appendValueInput("B")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Синий");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['board_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Поменять цвет всех светодиодов на плате");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Красный");
    this.appendValueInput("G")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Зеленый");
    this.appendValueInput("B")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Синий");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['module_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Поменять цвет всех светодиодов на модуле");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Красный");
    this.appendValueInput("G")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Зеленый");
    this.appendValueInput("B")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Синий");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['cargo'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Магнит")
            .appendField(new Blockly.FieldDropdown([["включить","ON"], ["выключить","OFF"]]), "STATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};
  
Blockly.Blocks['cargo_led'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Поменять цвет светодиода на модуле захвата");
        this.appendValueInput("NUM")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Номер светодиода");
        this.appendValueInput("R")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Красный");
        this.appendValueInput("G")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Зеленый");
        this.appendValueInput("B")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Синий");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
  
Blockly.Blocks['cargo_led_all'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Поменять цвета всех светодиодов на модуле захвата");
        this.appendValueInput("R")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Красный");
        this.appendValueInput("G")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Зеленый");
        this.appendValueInput("B")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Синий");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};