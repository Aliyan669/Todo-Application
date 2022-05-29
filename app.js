var todo =document.getElementById("todo")
var ullist = document.getElementById("ul")



function  btnval(){
  var li = document.createElement("li")
  var text = document.createTextNode(todo.value);
  li.appendChild(text)

  ullist.appendChild(li).style.border = "2px solid greenyellow"

  li.setAttribute("class","liststyle")
 console.log(li)

 todo.value=""


  
var dlbton = document.createElement("button")
var deletetxt =document.createTextNode("DELETE")
dlbton.appendChild(deletetxt)
li.appendChild(dlbton)

dlbton.setAttribute("class","dlbuttn")
dlbton.setAttribute("onclick","hello(this)");




var edtbtun = document.createElement("button")
var edttext =document.createTextNode("EDIT")
edtbtun.appendChild(edttext)
li.appendChild(edtbtun)

edtbtun.setAttribute("class","dlbuttn")
edtbtun.setAttribute("onclick","Edititem(this)");
// console.log(li)



}
function Edititem(e){
  var edit = prompt("Enter Edit value");
 e.parentNode.firstChild.nodeValue = edit;
}
function deleteall(){
  ullist.innerHTML=" "
}











 
function hello(w){
  w.parentNode.remove();
 
} 





