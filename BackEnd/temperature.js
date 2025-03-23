const express = require("express");
const temperature = express.Router();

function CtoF(value){
    return ((value * 9 / 5) + 32);
}

function CtoK(value){
    return value + 273.15;
}

function FtoC(value){
    return ((value - 32) * 5 / 9);
}

function FtoK(value){
    return FtoC(value) + 273.15;
}

function KtoC(value){
    return value - 273.15;
}

function KtoF(value){
    return CtoF(KtoC(value));
}

temperature.post("/temperature",(req,res) => {
    let { value, fromUnit, toUnit} = req.body;
    if(fromUnit === toUnit){
        return res.json({ convertedValue : value });
    }
    switch (`${fromUnit}-${toUnit}`){
        case "C-F":
            convertedValue = CtoF(value);
            break
        case "C-K":
            convertedValue = CtoK(value);
            break
        case "F-C":
            convertedValue = FtoC(value);
            break
        case "F-K":
            convertedValue = FtoK(value);
            break
        case "K-C":
            convertedValue = KtoC(value);
            break
        case "K-F":
            convertedValue = KtoF(value);
            break
        default:
            return res.status(400).json({ error: "Conversion not supported" }); 
    }

    return res.json({ convertedValue });
});

module.exports = temperature;