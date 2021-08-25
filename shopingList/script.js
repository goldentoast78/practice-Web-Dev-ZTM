var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 

//check null input檢查無效輸入
function inputLength(){
	return input.value.length;
}

//Create a element in shopping list 新增shopping項目
//include input text & delete button 輸入內容與delete按鈕
function createListElement(){
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

		var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete!"));
 		li.appendChild(btn);
 		btn.onclick = removeParent;
}

//check input then createa element in shopping list
//確認是否為有效輸入，有效則新增shoping 項目
function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}
//check input & event-Enter(keyboard), then createelement in shopping list

function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}
//callback function
// listen for [press Enter button in screen]監聽enter按鈕
button.addEventListener("click",addListAfterClick);
// listen for [ Enter button in keyboard]監聽鍵盤enter鍵
input.addEventListener("keypress",addListAfterKeypress);

//after click class turn to "done"點下去後類別變成done
ul.onclick=function(event){
	//var target=event.target;
	event.target.classList.toggle("done");
}
//return length of list回傳列表個數
function listLength(){
	return listItems.length;
}

// create delete button 
function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

//add delete button to orinal element in list 在原有的項目增加delete按鈕
for( i=0;i<listLength();i++){

deleteButton();
}

//remove element
function removeParent(evt){
	evt.target.parentNode.remove();
}