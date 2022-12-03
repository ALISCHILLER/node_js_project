// var SerialPort = require("serialport");
// var port = "COM1";
// var message = "Hakuna Matata";

// var serialPort = new SerialPort(port, {
//   baudRate: 9600
// });

// serialPort.write(message, function(err) {
//   if (err) {
//     return console.log("Error on write: ", err.message);
//   }
//   console.log("Message sent successfully");
// });

const { SerialPort } = require('serialport');
console.log(SerialPort.list());


