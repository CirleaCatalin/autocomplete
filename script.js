var input = document.getElementById("inpt");

let firstDot = false;
let secondDot = false;
let firstLine = false;
const typeInpt2 = function(){
    
    if(input.value.length === 3 && firstDot === false){
        input.value = input.value + '.';
        firstDot = true;
    }
     if(input.value.length === 3 && firstDot === true){
        firstDot = false;
    }
    if(input.value.length === 4 && firstDot===false){
        var data = input.value.slice(0,3) + "." + input.value.slice(3);
        input.value = data;
        firstDot = true;
    }
    if(input.value.length === 7 && secondDot === false){
        input.value = input.value + '.';
        secondDot = true;
    }
    if(input.value.length === 7 && secondDot === true){
        secondDot = false;
    }
    if(input.value.length === 8 && secondDot === false){
        var data = input.value.slice(0,7) + "." + input.value.slice(7);
        input.value = data;
        secondDot = true;
    }
    if(input.value.length === 11 && firstLine === false){
        input.value = input.value + '-';
        firstLine = true;
    }
    if(input.value.length === 11 && firstLine === true){
        firstLine = false;
    }
    if(input.value.length === 12 && firstLine===false){
        var data = input.value.slice(0,11) + "-" + input.value.slice(11);
        input.value = data;
        firstLine = true;
    }
}

/*** CPF formatation ***/
function cpfChange(cpfValue) {
    console.log("raw "+ cpfValue)
    var numeric = cpfValue.replace(/[^0-9]+/g, ''); //orice caracter care nu e in 0-9 o sa fie sters si inlocuit cu ''
    console.log("numeric: "+numeric)
    var cpfLength = numeric.length;

    var partOne = numeric.slice(0, 3) + ".";
    console.log("Part1: " + partOne)
    var partTwo = numeric.slice(3, 6) + ".";
    console.log("Part2: " + partTwo)
    var partThree = numeric.slice(6, 9) + "-";

    var cpfInput = document.getElementById("cpfInput"); // here is the CPF ID of the input

    if (cpfLength < 4) { 
        cpfInput.value = numeric;
    } else if (cpfLength >= 4 && cpfLength < 7) {
        var formatCPF = partOne +
                       numeric.slice(3);
        cpfInput.value = formatCPF;
        console.log("slice-ul: "+numeric.slice(3))
    } else if (cpfLength >= 7 && cpfLength < 10) {
        var formatCPF = partOne +
                       partTwo +
                       numeric.slice(6);
        cpfInput.value = formatCPF;
    } else if (cpfLength >= 10 && cpfLength < 12) {
        var formatCPF = partOne +
                       partTwo +
                       partThree +
                       numeric.slice(9);
        cpfInput.value = formatCPF;
    } 
}