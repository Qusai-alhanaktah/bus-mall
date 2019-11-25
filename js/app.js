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
];

var counter = 0;
var left = document.querySelector("#left");
var middle = document.querySelector("#middle");
var right = document.querySelector("#right");
var imageSection = document.querySelector("#imageSection");
var showing = document.querySelector("#showing");


function Sales(name) {
    this.name = name;
    this.imagePath = `img/${name}.jpg`;
    this.voting = 0;
    this.views = 0;
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
    // while (leftSales == middleSales) {
        
    // }
    leftSales.views++;
    middleSales.views++;
    rightSales.views++;
    left.setAttribute("src", leftSales.imagePath);
    left.setAttribute("alt", leftSales.name);
    left.setAttribute("title", leftSales.name);
    middle.setAttribute("src", middleSales.imagePath);
    middle.setAttribute("alt", middleSales.name);
    middle.setAttribute("title", middleSales.name);
    right.setAttribute("src", rightSales.imagePath);
    right.setAttribute("alt", rightSales.name);
    right.setAttribute("title", rightSales.name);



}
render();



function handleClick(e) {

    counter++;
    if (counter < 25) {
        if (e.target.id !== "imageSection") {
            for (let x = 0; x < Sales.all.length; x++) {
                if (e.target.title === Sales.all[x].name) {
                    Sales.all[x].voting++;
                }
            }
            console.table(Sales.all);
            render();
        }

    }
   
    if (counter == 25){
         showwww();
     }
    }

imageSection.addEventListener("click", handleClick);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function showwww(){
    var container = document.getElementById("showing");
    var ulEl = document.createElement("ul");
    container.appendChild(ulEl);
    console.log(container)
    for (let z = 0; z < Sales.all.length; z++) {

        var liEl = document.createElement("li");
        ulEl.appendChild(liEl);
        liEl.textContent = `${Sales.all[z].name} Slicer had ${Sales.all[z].voting} votes and was shown ${Sales.all[z].views} times`;
        console.table(Sales.all[z]);
    }
}
