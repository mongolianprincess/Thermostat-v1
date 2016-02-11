function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.PSM = true;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinTemperature()) {
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
