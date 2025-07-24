
let mydis = document.getElementById("display");

function appendToDisplay(input){
    if (mydis.value === "0" || mydis.value === "Hello World" ) {
        mydis.value = input;
    } else {
        mydis.value += input;
    }
}

function clearDisply(){
    mydis.value = 0 ;
}

function calculate(){
    try{
    mydis.value= eval(mydis.value)
    }
    catch(error){
        mydis.value="Hello World";
    }
}


function backSpace() {
    if (mydis.value === "Hello World") {
        mydis.value = "0";
    } else {
        mydis.value = mydis.value.slice(0, -1);
        if (mydis.value === "") {
            mydis.value = "0";
        }
    }
}

