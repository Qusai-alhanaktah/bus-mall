var names = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "usb",
    "water-can",
    "wine-glass",
]
var voting = 0;
var time = 0;
var counter = 0;
var votes = [];
var left = document.querySelector("#left");
var middle = document.querySelector("#middle");
var right = document.querySelector("#right");
var imageSection = document.querySelector("#imageSection");
var showing = document.querySelector("#showing");


function Sales(name) {
    this.name = name;
    this.imagePath = `img/${name}.jpg`;
    Sales.all.push(this);
}
Sales.all = [];
for (var i = 0; i < names.length; i++) {
    new Sales(names[i]);


}


function render() {
    var leftSales = Sales.all[randomNumber(0, Sales.all.length - 13)];
    var middleSales = Sales.all[randomNumber(Sales.all.length - 12, Sales.all.length - 6)];
    var rightSales = Sales.all[randomNumber(Sales.all.length - 5, Sales.all.length - 1)];
    // while((leftSales !== middleSales) &&(leftSales !== rightSales )) { 
    left.setAttribute("src", leftSales.imagePath);
    left.setAttribute("alt", leftSales.name);
    left.setAttribute("title", leftSales.name);
    middle.setAttribute("src", middleSales.imagePath);
    middle.setAttribute("alt", middleSales.name);
    middle.setAttribute("title", middleSales.name);
    right.setAttribute("src", rightSales.imagePath);
    right.setAttribute("alt", rightSales.name);
    right.setAttribute("title", rightSales.name);

    // }
}
render();





imageSection.addEventListener("click", function (e) {

    counter++;
    if (counter < 26) {
        if (event.target.id !== "imageSection") {
            render();
           
                    votes[counter]=(left, voting++);
               
            }
        }
        
        
        
        console.log(votes);
    });







function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



