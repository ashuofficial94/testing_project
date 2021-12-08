let form1 = document.getElementById('form');

form1.addEventListener('submit', () => {

    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;

    let message = "";
    let valid = true;

    if(input1.length != 3) {
        message += "Input 1 invalid.\n";
        valid = false;
    }

    for(let index in input2) {
        if(input2.charAt(index) < 'a' || input2.charAt(index) > 'z') {
            message += "Input 2 invalid.\n";
            valid = false;
            break;
        }
    }

    for(let index in input3) {
        if(input3.charAt(index) < '0' || input3.charAt(index) > '9') {
            message += "Input 3 invalid.\n";
            valid = false;
            break;
        }
    }

    for(let index in input4) {
        if(input4.charAt(index) < 'A' || input4.charAt(index) > 'Z') {
            message += "Input 4 invalid.\n";
            valid = false;
            break;
        }
    }

    if(!valid) {
        alert(message);
        event.preventDefault();
    }
});