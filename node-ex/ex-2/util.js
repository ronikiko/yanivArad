const jsonFile = require("jsonfile");

const writeToJsonFile = (json) => {
  let file = "jsonData.json";
  // Reading the json file -obj- is file content
  jsonFile.readFile(file, (err, obj) => {
    if (err) return console.log(err);
    setTimeout(() => {
      // set a new var = to phones array in the object
      let phones = obj.phones;
      // now we push the new object that pass trow the function call
      phones.push(json);

      // now we write the file over with new content
      jsonFile.writeFile(file, obj, (err) => {
        if (err) return console.log(err);

        // printing to the console the last object added to the phones array
        console.log(
          "A new object was added",
          obj.phones[obj.phones.length - 1]
        );
      });
    }, 2000);
  });
};

module.exports = { writeToJsonFile };
