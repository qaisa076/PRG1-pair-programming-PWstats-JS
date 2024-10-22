const fs = require("fs");

const inputFile = "10000-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}

function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);
  const characterSize = {};

  for (let line of lines) {
    elements = line.split(delimiter);
    const lengthData = elements[1].length
    if (characterSize[lengthData]) {
      characterSize[lengthData] += 1;
    } else {
      characterSize[lengthData] = 1;
    }
    }
    for (const [chars, count] of Object.entries(characterSize)) {
      const outputLine = `chars: ${chars}, count: ${count}\n`;
      fs.appendFileSync(outputFile, outputLine);
  }}

// Main execution
deleteExistingOutputFile(); 
processData();
