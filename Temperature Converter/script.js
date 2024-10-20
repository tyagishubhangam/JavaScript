document.getElementById("convert").onclick = function () {
    let val = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let finalValue = unit === "F" ? ((5 * (val - 32)) / 9).toFixed(2) + "C" : ((9 * val / 5) + 32).toFixed(2) + "F";
    document.getElementById("finalValue").textContent = finalValue
    
};