let airlinesObject = require("./airline_ver_3.json");

function airline(params) {
    let arr = [];
    let s = 0;
    if (params === "undefined" || params === undefined || params === "") {
        airlinesObject.map((dat) => {
            arr.push(dat);
        })
    } else {
        let param = params.toLowerCase();
        airlinesObject.map((dat) => {
            if (dat.IATACode.toLowerCase().search(param) !== -1) {
                arr.push(dat);
            }
        })
    }
    return arr;
}
module.exports = airline