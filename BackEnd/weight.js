const express = require("express");
const weight = express.Router();

//----------------------- Mg to anyone functions
function MgToG(value){
    return value / 1000;
}
function MgToKg(value){
    return MgToG(value) / 1000;
}
function MgToO(value){
    return MgToKg(value) * 35.274;
}
function MgToP(value){
    return MgToKg(value) * 2.20462;
}
//----------------------- G to anyone functions
function GToMg(value){
    return value * 1000;
}
function GToKg(value){
    return value / 1000;
}
function GToO(value){
    return value / 28.35;
}
function GToP(value){
    return value / 453.592;
}
//----------------------- Kg to anyone functions
function KgToMg(value){
    return KgToG(value) * 1000;
}
function KgToG(value){
    return value * 1000;
}
function KgToO(value){
    return value * 35.274;
}
function KgToP(value){
    return value * 2.20462;
}
//----------------------- O to anyone functions
function OToMg(value){
    return OToG(value) * 1000;
}
function OToG(value){
    return value * 28.35;
}
function OToKg(value){
    return OToG(value) / 1000;
}
function OToP(value){
    return value / 16;
}
//----------------------- P to anyone functions
function PToMg(value){
    return PToG(value) * 1000;
}
function PToG(value){
    return value * 453.59237;
}
function PToKg(value){
    return PToG(value) / 1000;
}
function PToO(value){
    return value * 16;
}

weight.post("/weight",(req,res) => {
    let { value , fromUnit , toUnit } = req.body;
    let convertedValue;
    if( fromUnit === toUnit ){
        return res.json({ convertedValue: value })
    }
    switch (`${fromUnit}-${toUnit}`) {
        case "Mg-G":
            convertedValue = MgToG(value);
            break;
        case "Mg-Kg":
            convertedValue = MgToKg(value);
            break;
        case "Mg-O":
            convertedValue = MgToO(value);
            break;
        case "Mg-P":
            convertedValue = MgToP(value);
            break;
        case "G-Mg":
            convertedValue = GToMg(value);
            break;
        case "G-Kg":
            convertedValue = GToKg(value);
            break;
        case "G-O":
            convertedValue = GToO(value);
            break;
        case "G-P":
            convertedValue = GToP(value);
            break;
        case "Kg-Mg":
            convertedValue = KgToMg(value);
            break;
        case "Kg-G":
            convertedValue = KgToG(value);
            break;
        case "Kg-O":
            convertedValue = KgToO(value);
            break;
        case "Kg-P":
            convertedValue = KgToP(value);
            break;
        case "O-Mg":
            convertedValue = OToMg(value);
            break;
        case "O-G":
            convertedValue = OToG(value);
            break;
        case "O-Kg":
            convertedValue = OToKg(value);
            break;
        case "O-P":
            convertedValue = OToP(value);
            break;
        case "P-Mg":
            convertedValue = PToMg(value);
            break;
        case "P-G":
            convertedValue = PToG(value);
            break;
        case "P-Kg":
            convertedValue = PToKg(value);
            break;
        case "P-O":
            convertedValue = PToO(value);
            break;
        default:
            return res.status(400).json({ error: "Conversion not supported" });
    }
    return res.json({ convertedValue });
})

module.exports = weight;