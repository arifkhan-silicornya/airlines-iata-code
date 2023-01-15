let airlinesObject = require("./airline_ver_2.json");

var fs = require('fs');
function airline(params) {
    let arr = [];
    let s = 0;
    if (params === "undefined" || params === undefined || params === "") {
        airlinesObject.map((dat) => {
            s = s + 1;
            let obj = {};
            obj["Airline"]=dat.Airline;
            obj["IATACode"]=dat.IATACode;
            arr.push(obj);
        })
        console.log(s);
    } else {
        let param = params.toLowerCase()
        airlinesObject.map((dat) => {
            if (dat.IATACode.toLowerCase().search(param) !== -1) {
                arr.push(dat);
            }
        })
    }
    // let dictstring = JSON.stringify(arr);
    // fs.writeFile("thing.json", dictstring);

    fs.writeFile("./customer.json", JSON.stringify(arr), err => {
        if (err) console.log("Error writing file:", err);
      });
    return arr;
}
airline('')
module.exports = airline