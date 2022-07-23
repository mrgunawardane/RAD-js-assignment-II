const resultText = document.querySelector(".result");

let showText = "";
let loperand = 0;
let roperand = 0;
let operator = "";

let dot = false;

const putDot = () => {
    dot = true;
    showText += ".";
    resultText.innerText = showText;
}
const getAdd = () => {
    operator = "+";
    if(loperand == 0){
        if(dot)
            loperand = parseFloat(showText);
        else
            loperand = parseInt(showText);
    }
    showText = "";
}
const getSub = () => {
    operator = "-";
    if(loperand == 0){
        if(dot)
            loperand = parseFloat(showText);
        else
            loperand = parseInt(showText);
    }
    showText = "";
}
const getMul = () => {
    operator = "x";
    if(loperand == 0){
        if(dot)
            loperand = parseFloat(showText);
        else
            loperand = parseInt(showText);
    }
    showText = "";
}
const getDiv = () => {
    operator = "/";
    if(loperand == 0){
        if(dot)
            loperand = parseFloat(showText);
        else
            loperand = parseInt(showText);
    }
    showText = "";
}
const getResult = () => {
    if(loperand && operator && showText != ""){
        roperand = parseInt(showText);
        
        let res = 0;
        if(operator == "+")
            res = loperand + roperand;
        if(operator == "-")
            res = loperand - roperand;
        if(operator == "x")
            res = loperand * roperand;
        if(operator == "/")
            res = loperand / roperand;

        showText = res.toString();
        resultText.innerText = showText;

        loperand = 0;
        roperand = 0;
        showText = "";
    }
}



const put0 = () => {
    resultText.innerText = showText;
    showText += "0";
    resultText.innerText = showText;
}
const put1 = () => {
    resultText.innerText = showText;
    showText += "1";
    resultText.innerText = showText;
}
const put2 = () => {
    resultText.innerText = showText;
    showText += "2";
    resultText.innerText = showText;
}
const put3 = () => {
    resultText.innerText = showText;
    showText += "3";
    resultText.innerText = showText;
}
const put4 = () => {
    resultText.innerText = showText;
    showText += "4";
    resultText.innerText = showText;
}
const put5 = () => {
    resultText.innerText = showText;
    showText += "5";
    resultText.innerText = showText;
}
const put6 = () => {
    resultText.innerText = showText;
    showText += "6";
    resultText.innerText = showText;
}
const put7 = () => {
    resultText.innerText = showText;
    showText += "7";
    resultText.innerText = showText;
}
const put8 = () => {
    resultText.innerText = showText;
    showText += "8";
    resultText.innerText = showText;
}
const put9 = () => {
    resultText.innerText = showText;
    showText += "9";
    resultText.innerText = showText;
}
const getClear = () => {
    showText = "0";
    resultText.innerText = showText;
    showText = "";
}
