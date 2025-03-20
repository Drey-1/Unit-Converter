const express = require("express");
const weight = express.Router();
 
function MgtoG(value){

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
    return res.json({ convertedValue })
})