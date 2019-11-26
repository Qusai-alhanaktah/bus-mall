'use strict'
var imagePaths  = [
  "bag.jpg",
  "banana.jpg",
  "bathroom.jpg",
  "boots.jpg",
  "breakfast.jpg",
  "bubblegum.jpg",
  "chair.jpg",
  "cthulhu.jpg",
  "dog-duck.jpg",
  "dragon.jpg",
  "pen.jpg",
  "pet-sweep.jpg",
  "scissors.jpg",
  "shark.jpg",
  "sweep.png",
  "tauntaun.jpg",
  "unicorn.jpg",
  "usb.gif",
  "water-can.jpg",
  "wine-glass.jpg"
];
var counter = 0;
var leftImage = document.querySelector("#left");
var middleImage = document.querySelector("#middle");
var rightImage = document.querySelector("#right");
var imageSection = document.querySelector("#imageSection");
var showing = document.querySelector("#showing");
Product.all = [];

function Product(path) {
  var pathArr = path.split(".");
  this.name = pathArr[0];
  this.imagePath = `img/${this.name}.${pathArr[1]}`;
  this.voting = 0;
  this.views = 0;
  Product.all.push(this);
}


for (var i = 0; i < imagePaths .length; i++) {
  new Product(imagePaths [i]);
}
function render() {
  var leftSales = Product.all[randomNumber(0, Product.all.length - 13)];
  var middleSales = Product.all[randomNumber(Product.all.length - 12, Product.all.length - 6)];
  var rightSales = Product.all[randomNumber(Product.all.length - 5, Product.all.length - 1)];
  // while (leftSales == middleSales) {

  // }
  leftSales.views++;
  middleSales.views++;
  rightSales.views++;

  leftImage.setAttribute("src", leftSales.imagePath);
  leftImage.setAttribute("alt", leftSales.name);
  leftImage.setAttribute("title", leftSales.name);

  middleImage.setAttribute("src", middleSales.imagePath);
  middleImage.setAttribute("alt", middleSales.name);
  middleImage.setAttribute("title", middleSales.name);

  rightImage.setAttribute("src", rightSales.imagePath);
  rightImage.setAttribute("alt", rightSales.name);
  rightImage.setAttribute("title", rightSales.name);
}
render();
function handleClick(e) {
  counter++;
  if (counter < 25) {
    if (e.target.id !== "imageSection") {
      for (let x = 0; x < Product.all.length; x++) {
        if (e.target.title === Product.all[x].name) {
          Product.all[x].voting++;
        }
      }
      render();
    }
  }
  if (counter == 25) {
    showChartAndList();
  }
}

imageSection.addEventListener("click", handleClick);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function showChartAndList() {
  var votes = [];
  var view = [];
  var labels = [];
  var container = document.getElementById("showing");
  var ulEl = document.createElement("ul");
  container.appendChild(ulEl);
  for (let z = 0; z < Product.all.length; z++) {
    var liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.textContent = `${Product.all[z].name} had ${Product.all[z].voting} votes and was shown ${Product.all[z].views} times`;
    labels.push(Product.all[z].name)
    votes.push(Product.all[z].voting);
    view.push(Product.all[z].views);
  }

  var ctx = document.getElementById("myChart").getContext('2d');
  var voteData = {
    label: "# of Votes",
    data: votes,
    backgroundColor: '#404040',
  };

  var viewsData = {
    label: "# of Views",
    data: view,
    backgroundColor: '#0040ff',
  };

  var labelsInfo = {
    labels: labels ,
    datasets: [voteData, viewsData]
  };

  var chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: labelsInfo,
    options: chartOptions,
  });
}