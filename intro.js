/**

**/

var list = document.getElementById("thelist");
console.log(list);

var addElement = function(e){
  var el = document.createElement("li");
  el.innerHTML = "yo";
  list.appendChild(el);
  console.log(list);
};

var b = document.getElementById("b");
b.addEventListener("click", addElement);
