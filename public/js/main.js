$(function(){
  new WOW().init();
});


//stat chart for D3.js

//chart 1

let data = [ 17, 60];

d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("width", function(d) { return d * 10 + "px"; })
  .text(function(d) { return d + '%'; });

//chart 2

let data1 = [63.5, 5.8, 13.9, 14.4 ];

d3.select(".chart2")
  .selectAll("div")
  .data(data1)
  .enter().append("div")
  .style("width", function(d) { return d * 6 + "px"; })
  .text(function(d) { return d + '%'; });

//chart 3

let data2 = [68.5, 14, 8, 7.4];

d3.select(".chart3")
  .selectAll("div")
  .data(data2)
  .enter().append("div")
  .style("width", function(d) { return d * 4 + "px";})
  .text(function(d) {return d + '%';})

  //Chart 4


let data3 = [52, 48];

d3.select(".chart4")
  .selectAll("div")
  .data(data3)
  .enter().append("div")
  .style("width", function(d) { return d * 4 + "px";})
  .text(function(d) {return d + '%';})

// Chart 5

let data4=[64, 36];

d3.select(".chart5")
  .selectAll("div")
  .data(data4)
  .enter().append("div")
  .style("width", function(d) { return d * 4 + "px";})
  .text(function(d) {return d + '%';})

//Chart 6

let data5=[80, 20];

d3.select(".chart6")
  .selectAll("div")
  .data(data5)
  .enter().append("div")
  .style("width", function(d) { return d * 2 + "px";})
  .text(function(d) {return d + '%';})

//Chart 7

let data6=[83.3, 3.6, 4.2, 15.05];

d3.select(".chart7")
  .selectAll("div")
  .data(data6)
  .enter().append("div")
  .style("width", function(d) { return d * 4 + "px";})
  .text(function(d) {return d + '%';})

