/**
Team Furry Chainsaw
Alessandro Cauthon & Joyce Wu
SoftDev1 pd7
HW16 -- Sequential Progression II: Electric Boogaloo...
2017-12-08
**/

var itemNum = 8; //item number in list
var list = document.getElementById("thelist"); //list of elements in list

//adds new item each time button is clicked
var addElement = function(e){
  var el = document.createElement("li");
  el.innerHTML = "item " + itemNum;
  list.appendChild(el);
  //adds new eventListener every time new item is created
  el.addEventListener("mouseover", changeText);
  el.addEventListener("mouseout", helloWorld);
  el.addEventListener("click", removeText);
  itemNum++;
  console.log(list);
};

//changes text whenever mouse is over item
var changeText = function(e){
  var heading = document.getElementById("h");
  heading.innerHTML = this.innerHTML;
};

//changes back to hello world after mouse is no longer over the event
var helloWorld = function(e){
  var heading = document.getElementById("h");
  heading.innerHTML = "Hello World!";
};

//removes item when clicked
var removeText = function(e){
  this.remove();
};

//button to add to list
var b = document.getElementById("b");
b.addEventListener("click", addElement);

//adds each event to each item in the original list
var li = document.getElementsByTagName("LI");
for (i = 0; i < li.length; i++){
  console.log(li[i] + "yuh");
  li[i].addEventListener("mouseover", changeText);
  li[i].addEventListener("mouseout", helloWorld);
  li[i].addEventListener("click", removeText);
};
