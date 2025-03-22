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
//----------------------- F to anyone functions
function FToMm(value) {
     return value * 304.8;
}
 function FToCm(value) {
     return value * 30.48;
}
 function FToM(value) {
     return value * 0.3048;
}
function FToKm(value) {
     return value * 0.0003048;
}
 function FToI(value) {
     return value * 12;
}
 function FToY(value) {
     return value / 3; 
}
 function FToMi(value) {
     return value / 5280; 
}
//----------------------- Y to anyone functions
function YToMm(value) {
     return value * 914.4;
}
function YToCm(value) {
     return value * 91.44;
}
function YToM(value) {
     return value * 0.9144;
}
function YToKm(value) {
     return value * 0.0009144;
}
function YToI(value) {
     return value * 36;
}
function YToF(value) {
     return value * 3;
}
function YToMi(value) {
     return value / 1760;
}
//----------------------- Mi to anyone functions
function MiToMm(value) {
     return value * 1609344;
}
function MiToCm(value) {
     return value * 160934.4;
}
function MiToM(value) {
     return value * 1609.344;
}
function MiToKm(value) {
     return value * 1.609344;
}
function MiToI(value) {
     return value * 63360;
}
function MiToF(value) {
     return value * 5280;
}
function MiToY(value) {
     return value * 1760;
}

length.post("/length", (req, res) => {
    let { value, fromUnit, toUnit } = req.body;
    
    if (fromUnit === toUnit) {
        return res.json({ convertedValue: value });
    }

    const converterMap = {
        "Mm-Cm": MmToCm,
        "Mm-M": MmToM,
        "Mm-Km": MmToKm,
        "Mm-I": MmToI,
        "Mm-F": MmToF,
        "Mm-Y": MmToY,
        "Mm-Mi": MmToMi,
        "Cm-Mm": CmToMm,
        "Cm-M": CmToM,
        "Cm-Km": CmToKm,
        "Cm-I": CmToI,
        "Cm-F": CmToF,
        "Cm-Y": CmToY,
        "Cm-Mi": CmToMi,
        "M-Mm": MToMm,
        "M-Cm": MToCm,
        "M-Km": MToKm,
        "M-I": MToI,
        "M-F": MToF,
        "M-Y": MToY,
        "M-Mi": MToMi,
        "Km-Mm": KmToMm,
        "Km-Cm": KmToCm,
        "Km-M": KmToM,
        "Km-I": KmToI,
        "Km-F": KmToF,
        "Km-Y": KmToY,
        "Km-Mi": KmToMi,
        "I-Cm": IToCm,
        "I-M": IToM,
        "I-Km": IToKm,
        "I-F": IToF,
        "I-Y": IToY,
        "I-Mi": IToMi,
        "I-Mm": IToMm,
        "F-Mm": FToMm,
        "F-Cm": FToCm,
        "F-M": FToM,
        "F-Km": FToKm,
        "F-I": FToI,
        "F-Y": FToY,
        "F-Mi": FToMi,
        "Y-Mm": YToMm,
        "Y-Cm": YToCm,
        "Y-M": YToM,
        "Y-Km": YToKm,
        "Y-I": YToI,
        "Y-F": YToF,
        "Y-Mi": YToMi,
        "Mi-Mm": MiToMm,
        "Mi-Cm": MiToCm,
        "Mi-M": MiToM,
        "Mi-Km": MiToKm,
        "Mi-I": MiToI,
        "Mi-F": MiToF,
        "Mi-Y": MiToY,
    };

    const key = `${fromUnit}-${toUnit}`;
    const conversionFunc = converterMap[key];

    if (conversionFunc) {
        return res.json({ convertedValue: conversionFunc(value) });
    } else {
        return res.status(400).json({ error: "Conversion not supported" });
    }
});

module.exports = length;
