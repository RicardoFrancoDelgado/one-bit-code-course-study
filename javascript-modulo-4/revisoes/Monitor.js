class Monitor {
  constructor(inches, brand, hertz) {
    this.inches = inches
    this.brand = brand
    this.hertz = hertz
    this.input = "HDMI"
  }

  chooseVGA() {
    return this.input = "VGA"
  }
}

module.exports = Monitor