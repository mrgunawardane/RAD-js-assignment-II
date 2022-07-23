const res = document.querySelector(".result");

const getInput = () =>{
    let sub = document.getElementById("subject").value;
    let mark = document.getElementById("marks").value;

    let grade = parseInt(mark);
    let output = "";
    if(grade > 75)
        output += "Wow great, You are exellent for " + sub + " ...";
    else if(grade > 65)
        output += "Well done, You are very good in " + sub + " ...";
    else if(grade > 55)
        output += "Nice, You are passed but try better for " + sub +" ...";
    else
        output += "Sorry.. You have to work hard for " + sub + " ..."
    
    res.innerText = output;
}