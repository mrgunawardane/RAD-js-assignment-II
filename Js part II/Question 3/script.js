const getInput = () =>{
    let inputName = document.getElementById("name").value;
    let inputDate = document.getElementById("bday").value;
    
    let current = new Date();
    let bday = new Date(inputDate);
    let currentY = current.getFullYear();
    let bdayY = bday.getFullYear();

    let diff = currentY-bdayY;
    

    alert("Hello " + inputName + ".\n You are in your " + diff + " year .");
}
