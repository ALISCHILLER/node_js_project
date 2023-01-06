var SerialPort = require("serialport");
var port = "COM6";

var serialPort = new SerialPort(port, {
  baudRate: 9600
});

serialPort.on("open", function() {
  console.log("-- Connection opened --");
  serialPort.on("data", function(data) {
    console.log("Data received: " + data);
  });
});.