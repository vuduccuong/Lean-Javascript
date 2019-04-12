
var btnGen = document.getElementById('btnGen');
btnGen.addEventListener('click', onGen);
function onGen(){
    var content='';
    var html = document.getElementById('result');
    for(let i = 0; i<10;i++){
        content+='<div>Div thứ '+ (i+1)+'</div>';
    };

    html.innerHTML = content;
};

var btnChangeColor = document.getElementById('changeColor');
btnChangeColor.addEventListener('click', onChangeColor);
function onChangeColor(){
    var arrDiv = document.getElementsByTagName('div');
    for(let i = 0;i<arrDiv.length; i++){
        if(i%2===0){
            arrDiv[i].style.color='red';
        }else{
            arrDiv[i].style.color='blue';
        }
    }
}