/**
Team Furry Chainsaw
Alessandro Cartegni & Joyce Wu
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
var li = document.getElementById("thelist").getElementsByTagName("LI");
for (i = 0; i < li.length; i++){
  li[i].addEventListener("mouseover", changeText);
  li[i].addEventListener("mouseout", helloWorld);
  li[i].addEventListener("click", removeText);
};


//phase IV
//fibonacci function
var fibonacci = function(n){
    if(n == 0){return 0;}
    else if (n == 1){return 1;}
    else{return fibonacci(n-1) + fibonacci(n-2);}
};

var fibList = document.getElementById("fibList"); //retrieves fiblist
var count = 0; //count for fibonacci

//fibonacci button function
var fibButton = function(e){
  var item = document.createElement("li");
  if(count == 0 || count == 1){
    item.innerHTML = fibonacci(count);
  }else{
    var li = document.getElementById("fibList").getElementsByTagName("LI");
    var n = parseInt(li[count-1].innerHTML) + parseInt(li[count-2].innerHTML);
    li[li.length] = n;
    item.innerHTML = n;
  }
  fibList.appendChild(item);
  count++;
};

//adds event to fibonacci button
var a = document.getElementById("fibButton");
a.addEventListener("click", fibButton);

//extra sequences
//random student
var studentList = document.getElementById("studentList");

var student_list = [ 'Helen', 'Shakil', 'Eric', 'Jennifer Y', 'Jennifer Z', 'Arif', 'Queenie', 'Jawadul', 'Shaina', 'Vivien', 'Brian', 'Naotaka', 'Bayan', 'Adam', 'Caleb', 'Terry', 'Jason', 'Alessandro', 'Samantha', 'Carol', 'Joyce', 'Shannon', 'Charles', 'Taylor', 'Kelly', 'Leo', 'Khyber', 'Ibnul', 'Eugene', 'Yuyang', 'Karina', 'Tiffany', 'Holden', 'Michael'];
var randomStudent = function(){
    var rand_index = Math.trunc(Math.random() * student_list.length);
    return student_list[rand_index];
};
var testRand = function(){
    var el = document.createElement("li");
    el.innerHTML = randomStudent();
    studentList.appendChild(el);
};

var studentButton = document.getElementById("studentBtn");
studentButton.addEventListener("click", testRand);


//outputs pascal's triangle line by line
var pascalsTri = document.getElementById("pascalList");

var pCount = 0;

var pascalify = function(pCount){
    var line = [];
    if(pCount == 0){
	line.push(1);
	return line;
    }
    else{
	for (i = 0; i < pCount; i++){
	    var p = line[i] * (pCount-i) / (i+1);
	    line.push(p);
	    console.log(line);
	    return line.toString();
	}
    }
};

var testPascal = function(){
    var el = document.createElement("li");
    el.innerHTML = pascalify(pCount);
    pascalList.appendChild(el);
    pCount++;
}

var pascalButton = document.getElementById("pascalsBtn");
pascalButton.addEventListener("click", testPascal);
