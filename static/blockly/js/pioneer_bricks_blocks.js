// Board

Blockly.Blocks['run_status'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Статус коптера");
        this.setOutput(true, "Boolean");
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['board_number'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Бортовой номер");
        this.setOutput(true, "String");
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Время с момента включения");
      this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};
  
Blockly.Blocks['delta_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Разница между глобальным и локальным временем");
      this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};
  
Blockly.Blocks['launch_time'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Время запуска для системы навигации");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Flight

Blockly.Blocks['take_off'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Взлет");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['preflight'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Предвзлетная подготовка");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['landing'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Посадка");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['engines_disarm'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Заглушить двигатели");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

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

// Module

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

// Navigation

Blockly.Blocks['lps_position'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Координаты в системе навигации");
        this.setOutput(true, "Array");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['lps_velocity'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Скорость в системе навигации");
        this.setOutput(true, "Array");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['lps_yaw'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Угол поворота в системе навигации");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['range'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Данные c датчиков расстояния");
        this.setOutput(true, "Array");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Sensors
  
Blockly.Blocks['gyro'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Данные гироскопа");
        this.setOutput(true, "Array");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['accel'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Данные акселерометра");
        this.setOutput(true, "Array");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['orientation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Данные положение");
        this.setOutput(true, "Array");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
Blockly.Blocks['altitude'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Данные высоты по барометру");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Logger

Blockly.Blocks['log_last'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Последнее сообщение лога");
        this.setOutput(true, "String");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['log_all'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Все сообщения лога");
        this.setOutput(true, "Array");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Utils

Blockly.Blocks['sleep'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("Заснуть на");
        this.appendDummyInput()
            .appendField("секунд");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};