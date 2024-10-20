document.getElementById("convert").onclick = () => {
    let option = (document.getElementById("options").value);
    let value = parseFloat(document.getElementById("input").value);
    if(document.getElementById("input").value === ""){
        alert("Please enter the value");
        
    }
    let result = (option === "C-F") ? celsiusToFarenheit(value) : ((option === "M-F") ? metreToFeet(value) : kgToPound(value) );
    document.getElementById("converted").innerText = result;
}

let celsiusToFarenheit = (val) => {
    res = ((9 * val / 5) + 32).toFixed(3) + "F";
    return res;
    
}
let metreToFeet = (val) => {
    res = (val * 3.281).toFixed(3) + "Feet";
    return res;
}
let kgToPound = (val) => {
    res = (val * 2.205).toFixed(3) + "Pounds";
    return res;
}