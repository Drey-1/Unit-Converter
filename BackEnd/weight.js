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
    if( fromUnit === toUnit ){
        return res.json({ convertedValue: value })
    }
    const converterMap = {          
        "Mg-G": MgToG,
        "Mg-Kg": MgToKg,
        "Mg-O": MgToO,
        "Mg-P": MgToP,
        "G-Mg": GToMg,
        "G-Kg": GToKg,
        "G-O": GToO,
        "G-P": GToP ,
        "Kg-Mg": KgToMg,
        "Kg-G": KgToG,
        "Kg-O": KgToO,
        "Kg-P": KgToP,
        "O-Mg": OToMg,
        "O-G": OToG,
        "O-Kg": OToKg,
        "O-P": OToP,
        "P-Mg": PToMg,
        "P-G": PToG,
        "P-Kg": PToKg,
        "P-O": PToO,
    };
    const key = `${fromUnit}-${toUnit}`;
    const conversionFunc = converterMap[key];
    if(conversionFunc){
        return res.json({ convertedValue : conversionFunc(value) })
    } else {
        return res.status(400).json({ error: "Conversion not supported" });
    }
    
})

module.exports = weight;