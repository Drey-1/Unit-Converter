const express = require("express");
const temperature = express.Router();

function CToF(value){
    return ((value * 9 / 5) + 32);
}

function CToK(value){
    return value + 273.15;
}

function FToC(value){
    return ((value - 32) * 5 / 9);
}

function FToK(value){
    return FtoC(value) + 273.15;
}

function KToC(value){
    return value - 273.15;
}

function KToF(value){
    return CtoF(KtoC(value));
}

temperature.post("/temperature",(req,res) => {
    let { value, fromUnit, toUnit} = req.body;
    if(fromUnit === toUnit){
        return res.json({ convertedValue : value });
    }
    const converterMap = {
        "C-F": CToF,
        "C-K": CToK,
        "F-C": FToC,
        "F-K": FToK,
        "K-C": KToC,
        "K-F": KToF,
    }
    const key = `${fromUnit}-${toUnit}`;
    const conversionFunc = converterMap[key];
    if(conversionFunc){
        return res.json({ convertedValue: conversionFunc(Number(value))})
    } else {
        return res.status(400).json({ error: "Conversion not supported" });
    }
    
});

module.exports = temperature;