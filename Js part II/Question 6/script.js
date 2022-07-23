const getInput = () => {
    let numText = document.getElementById("number").value;
    let num = parseInt(numText);

    let res = Math.sqrt(num);

    alert("Square root of " + num + " is " + res);
};