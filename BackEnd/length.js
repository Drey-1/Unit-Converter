const express = require("express");
const length = express.Router();

//----------------------- Mm to anyone functions
function MmToCm(value){
     return value / 10; 
}
function MmToM(value){
     return value / 1000; 
}
function MmToKm(value){
     return value / 1000000; 
}
function MmToI(value){
     return value / 25.4; 
}
function MmToF(value){
     return value / 304.8; 
}
function MmToY(value){
     return value / 914.4; 
}
function MmToMi(value){
     return value / 1609344; 
}
//----------------------- Cm to anyone functions
function CmToMm(value){
     return value * 10; 
}
function CmToM(value){
     return value / 100; 
}
function CmToKm(value){
     return value / 100000; 
}
function CmToI(value){
     return value / 2.54; 
}
function CmToF(value){
     return value / 30.48; 
}
function CmToY(value){
     return value / 91.44; 
}
function CmToMi(value){
     return value / 160934; 
}
//----------------------- M to anyone functions
function MToMm(value){
     return value * 1000; 
}
function MToCm(value){
     return value * 100; 
}
function MToKm(value){
     return value / 1000; 
}
function MToI(value){
     return value * 39.3701; 
}
function MToF(value){
     return value * 3.28084; 
}
function MToY(value){
     return value * 1.09361; 
}
function MToMi(value){
     return value / 1609.34; 
}

//----------------------- Km to anyone functions
function KmToMm(value){
     return value * 1000000; 
}
function KmToCm(value){
     return value * 100000; 
}
function KmToM(value){
     return value * 1000; 
}
function KmToI(value){
     return value * 39370.1; 
}
function KmToF(value){
     return value * 3280.84; 
}
function KmToY(value){
     return value * 1093.61; 
}
function KmToMi(value){
     return value / 1.60934; 
}
//----------------------- I to anyone functions
function IToMm(value){
     return value * 25.4; 
}
function IToCm(value){
     return value * 2.54; 
}
function IToM(value){
     return value / 39.3701; 
}
function IToKm(value){
     return value / 39370.1; 
}
function IToF(value){
     return value / 12; 
}
function IToY(value){
     return value / 36; 
}
function IToMi(value){
     return value / 63360; 
}

length.post("/length", (req, res) => {
    let { value, fromUnit, toUnit } = req.body;
    let convertedValue;
    if (fromUnit === toUnit) {
        return res.json({ convertedValue: value });
    }
    switch (`${fromUnit}-${toUnit}`) {
        case "Mm-Cm":
             convertedValue = MmToCm(value); break;
        case "Mm-M":
             convertedValue = MmToM(value); break;
        case "Mm-Km":
             convertedValue = MmToKm(value); break;
        case "Mm-I":
             convertedValue = MmToI(value); break;
        case "Mm-F":
             convertedValue = MmToF(value); break;
        case "Mm-Y":
             convertedValue = MmToY(value); break;
        case "Mm-Mi":
             convertedValue = MmToMi(value); break;
        case "Cm-Mm":
             convertedValue = CmToMm(value); break;
        case "Cm-M":
             convertedValue = CmToM(value); break;
        case "Cm-Km":
             convertedValue = CmToKm(value); break;
        case "Cm-I":
             convertedValue = CmToI(value); break;
        case "Cm-F":
             convertedValue = CmToF(value); break;
        case "Cm-Y":
             convertedValue = CmToY(value); break;
        case "Cm-Mi":
             convertedValue = CmToMi(value); break;
        case "M-Mm":
             convertedValue = MToMm(value); break;
        case "M-Cm":
             convertedValue = MToCm(value); break;
        case "M-Km":
             convertedValue = MToKm(value); break;
        case "M-I":
             convertedValue = MToI(value); break;
        case "M-F":
             convertedValue = MToF(value); break;
        case "M-Y":
             convertedValue = MToY(value); break;
        case "M-Mi":
             convertedValue = MToMi(value); break;
        case "Km-Mm":
             convertedValue = KmToMm(value); break;
        case "Km-Cm":
             convertedValue = KmToCm(value); break;
        case "Km-M":
             convertedValue = KmToM(value); break;
        case "Km-I":
             convertedValue = KmToI(value); break;
        case "Km-F":
             convertedValue = KmToF(value); break;
        case "Km-Y":
             convertedValue = KmToY(value); break;
        case "Km-Mi":
             convertedValue = KmToMi(value); break;
        case "I-Mm":
             convertedValue = IToMm(value); break;
        case "I-Cm":
             convertedValue = IToCm(value); break;
        case "I-M":
             convertedValue = IToM(value); break;
        case "I-Km":
             convertedValue = IToKm(value); break;
        case "I-F":
             convertedValue = IToF(value); break;
        case "I-Y":
             convertedValue = IToY(value); break;
        case "I-Mi":
             convertedValue = IToMi(value); break;
        default:
            return res.status(400).json({ error: "Conversion not supported" });
    }
    return res.json({ convertedValue });
});

module.exports = length;
