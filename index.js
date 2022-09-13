let airlinesObject = require("./res/airlines.json");

function airline(params) {
    let arr = [];
    if (params === "undefined" || params === "") {
        airlinesObject.map((dat) => {
            arr.push(dat);
        })
    } else {
        airlinesObject.map((dat) => {
            let param = params.toLowerCase()
            if (dat.IATACode.toLowerCase().search(param) !== -1) {
                arr.push(dat);
            }
        })
    }
    return arr;
}
module.exports = airline