console.log("Hi my name is Rohit");

const fs = require("fs");
fs.writeFile("output.txt", "File Writing", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File has been written successfully!");
  }
});
