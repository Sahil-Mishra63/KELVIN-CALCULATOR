

function celsius(){
    let cel;
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    cel = kelvin - 273;
    document.getElementById("cel").innerHTML = `CELSIUS = ${cel} degrees celsius`;
}

function fahrenheit(){
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    let cel = kelvin - 273;
    
    let fahrenheit = cel * (9 / 5) + 32;

    fahrenheit = Math.floor(fahrenheit);

    document.getElementById("far").innerHTML = `FARHENHEIT = ${fahrenheit} degrees Farhenheit`;
}

function newton(){
    let newtons;
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    let cel = kelvin - 273;
    newtons = cel * (33 / 100);
    newtons = Math.floor(newtons);
    document.getElementById("new").innerHTML = `NEWTON = ${newtons} Newtons`;
}