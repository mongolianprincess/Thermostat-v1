function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.PSM = true;
  this.MAX_TEMPERATURE_PSM_ON = 25;
  this.MAX_TEMPERATURE_PSM_OFF = 32;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if(this.isMaxTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if(this.isMinTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinTemperature = function() {
  return this.temperature == this.MIN_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.PSM === true;
};

Thermostat.prototype.powerSavingModeOff = function() {
  return this.PSM = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.PSM = true;
};

Thermostat.prototype.isMaxTemperature = function() {
  if(this.isPowerSavingModeOn()) {
    return this.temperature == this.MAX_TEMPERATURE_PSM_ON;
    }
  else
    return this.temperature == this.MAX_TEMPERATURE_PSM_OFF;
};
