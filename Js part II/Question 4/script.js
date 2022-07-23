const result = document.querySelector(".res");

const getInput = () =>{
    let widthT = document.getElementById("wid").value;
    let heightT = document.getElementById("hei").value;

    let width = parseInt(widthT);
    let height = parseInt(heightT);

    let area = width * height;
    console.log(area);
    result.innerText = "Area of the rectangle is " + area + " .";
}
