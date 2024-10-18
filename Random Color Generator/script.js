document.getElementById("button").onclick = function () {
    let colorValue = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("mycolor").innerText = colorValue;
    document.body.style.backgroundColor = colorValue;
    
};