function add() {

    let numberOne = prompt("Enter number one:");

    let numberTwo = prompt("Enter number two:");

    sum = Number(numberOne) + Number(numberTwo);

    let resultBody = document.createElement("p");

    resultBody.textContent = `${numberOne} + ${numberTwo} = ${sum}`;

    document.body.appendChild(resultBody);

}



function mod() {


    let numberOne = prompt("Enter number one:");

    let numberTwo = prompt("Enter number two:");

    modulus = Number(numberOne) % Number(numberTwo);

    let resultBody = document.createElement("p");

    resultBody.textContent = `${numberOne} % ${numberTwo} = ${modulus}`;

    document.body.appendChild(resultBody);

}
