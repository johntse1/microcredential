
let change = document.querySelector('.change');
let theme = document.querySelector('.back');
themeCounter = 1
change.onclick = function(){
    if(themeCounter == 1)
    {
        theme.style.background = "antiquewhite";
        themeCounter = 0;
    }
    else
    {
        theme.style.background = "lightgray";
        themeCounter = 1;
    }
}

let myForm = document.querySelector('.form1');
let pDisplay = document.querySelector('.display3');

myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let nname = document.querySelector('.inputName').value;
    if(nname==""){
        alert("No name detected!");
    }
    if(nname!=""){
        pDisplay.innerHTML=`Welcome to the program ${nname}`;
    }
});