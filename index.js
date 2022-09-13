let airlinesObject = require("./airlines.json");

function airline(params) {
    let arr = [];
    let s = 0;
    if (params === "undefined" || params === undefined || params === "") {
        airlinesObject.map((dat) => {
            s = s + 1;
            arr.push(dat);
        })
    } else {
        let param = params.toLowerCase()
        airlinesObject.map((dat) => {
            if (dat.IATACode.toLowerCase().search(param) !== -1) {
                arr.push(dat);
            }
        })
    }
    return arr;
}
module.exports = airline