const interestText = document.querySelector(".interest"),
totalText = document.querySelector(".total");

const getInput = () =>{
    let inte = document.getElementById("amount").value;

    let val = parseInt(inte)*0.2;
    interestText.innerText = val;
    totalText.innerText = val + parseInt(inte);

}