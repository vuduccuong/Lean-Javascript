var content =  document.getElementById('inputContent');
var htmlNeedChange = document.getElementById('noidung');
var btnChange = document.getElementById('btnChangeContent');
btnChange.addEventListener('click', onChange);
function onChange(){
    if(content.value !== ''){
        htmlNeedChange.innerHTML = content.value;
    }
}

content.addEventListener('keyup', onCheckText);
function onCheckText(){
    if(content.value.length === 0){
        htmlNeedChange.innerHTML = 'Đây là nội dung chưa được thay đổi'; 
    }
}