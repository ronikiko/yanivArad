const jsonFile = require("jsonfile");

const renderPersonHtml = (req, id) => {
  return new Promise((resolve, reject) => {
    const file1 = "persons1.json";
    const file2 = "persons2.json";

    jsonFile.readFile(file1, (err, file1_content) => {
      if (err) return reject(err);
      let f_1 = file1_content.persons;
      req.jsonFile1 = f_1;
    });

    jsonFile.readFile(file2, (err, file2_content) => {
      if (err) return reject(err);
      let f_2 = file2_content.persons;

      if (req.jsonFile1 === undefined) {
        req.jsonFile1 = [];
      }
      //console.log(req.jsonFile1)
      let f_3 = req.jsonFile1.concat(f_2);

      let combineObj = {};
      for (let i = 0; i < f_3.length; i++) {
        if (f_3[i].id === parseInt(id)) {
          Object.assign(combineObj, f_3[i]);
        }
      }
      console.log(combineObj);
      resolve(htmlTable(combineObj));
    });
  });
};

const htmlTable = (json) => {
  if (Object.keys(json).length === 0)
    return "<h1>We have no match!!!</h1>";
  return `<table>
		<thead>
			<tr>
				<td>ID</td>
				<td>Name</td>
				<td>City</td>
				<td>mobiles</td>
			</tr>
		</thead>
		<tbody>
			<tr>
			<td>${json.id}</td>
			<td>${json.name ? json.name : ""}</td>
			<td>${json.address ? json.address.city : ""}</td>
			<td>${
        json.phones
          ? json.phones
              .map((phone) => phone.mobile)
              .join(",")
          : ""
      }</td>
		</tbody>
		</table>`;
};

module.exports = {
  renderPersonHtml,
};
//3ABHGH7H
