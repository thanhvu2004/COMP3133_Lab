const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

// File paths
const inputFilePath = path.join(__dirname, "input_countries.csv");
const canadaFilePath = path.join(__dirname, "canada.txt");
const usaFilePath = path.join(__dirname, "usa.txt");

// Delete existing files if they exist
if (fs.existsSync(canadaFilePath)) {
    console.log("Deleting existing canada.txt file...");
    fs.unlinkSync(canadaFilePath);
}

if (fs.existsSync(usaFilePath)) {
    console.log("Deleting existing usa.txt file...");
    fs.unlinkSync(usaFilePath);
}

// Read and process the CSV file
const results = {
    canada: [],
    usa: [],
};

fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on("data", (data) => {
        if (data.country.toLowerCase() === "canada") {
        results.canada.push(data);
        } else if (data.country.toLowerCase() === "united states") {
        results.usa.push(data);
        }
    })
    .on("end", () => {
        // Write Canada data to canada.txt
        if (results.canada.length > 0) {
        const canadaData = results.canada
            .map((row) => `${row.country},${row.year},${row.population}`)
            .join("\n");
        fs.writeFileSync(
            canadaFilePath,
            `country,year,population\n${canadaData}`
        );
        }

    // Write USA data to usa.txt
    if (results.usa.length > 0) {
        const usaData = results.usa
            .map((row) => `${row.country},${row.year},${row.population}`)
            .join("\n");
        fs.writeFileSync(usaFilePath, `country,year,population\n${usaData}`);
    }

    console.log("Files have been written successfully.");
});
