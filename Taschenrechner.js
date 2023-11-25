function getValue () {
    let val = document.getElementById("val").value
    console.log("Wert: " + val)
    document.getElementById("display").innerHTML = val
}

function display(value) {
    document.getElementById("result").value += value;
}


