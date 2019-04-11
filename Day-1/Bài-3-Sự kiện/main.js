var click = document.getElementById('click');
var dbclick = document.getElementById('ondblick');
var change = document.getElementById('onchange');
var mouse = document.getElementById('mouseEvent');
var keyup = document.getElementById('onkeyup');

click.addEventListener('click', onClick);
function onClick(){
    alert("bạn vừa click chuột");
};

dbclick.addEventListener('dblclick', ondbClick);
function ondbClick(){
    alert("Bạn vừa double click");
};

change.addEventListener('change', onChange);
function onChange(){
    alert("Bạn vừa thay đổi nội dung");
};

mouse.addEventListener('mouseover', mouseOver);
function mouseOver(){
    alert("Bạn vừa đưa chuột vào");
};
mouse.addEventListener('mouseout', mouseOut);
function mouseOut(){
    alert("Bạn vừa rời chuột");
};

keyup.addEventListener('keyup', onKeyup);
function onKeyup(){
    alert("Bạn vừa keyup");
}