import {button, para} from './dom-loader';
import '../css/button-style.css';
//initially when the page is loaded
var showButton = document.createTextNode('show para');

//the button shows "show para"
button.appendChild(showButton);
//the para is hidden
para.style.display = "none";

console.log(button);

//when the button is clicked
button.addEventListener('click', function(){
    togglePara();
});

function togglePara(){
   console.log(button.innerHTML);
   //if the button's text is "show"
    if(button.innerHTML == "show para"){
        //change the button's text to hide
        button.innerHTML = "hide para";
        //and show the para
        para.style.display = "block";
        
        //else if button's text is "hide"
    }else if(button.innerHTML == "hide para"){
        //change the text to "show"
        button.innerHTML = "show para";
        //hide the para
        para.style.display = "none";
    }
}

