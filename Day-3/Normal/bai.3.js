var btnCheck = document.getElementById('btnCheck');
var btnUnCheck = document.getElementById('btnUnCheck');
var checkBox = document.getElementById('isCheckBox');
var btnGetValue = document.getElementById('getValue');
var btnCheckAll = document.getElementById('checkAll');
var lstCheckBox = document.getElementsByClassName('checkboxa');


btnCheck.addEventListener('click', onCheckBtn);
function onCheckBtn(){
    checkBox.checked = true;
};

btnUnCheck.addEventListener('click', onUnCheckBtn);
function onUnCheckBtn(){
    checkBox.checked = false;
};

checkBox.addEventListener('change', onCheck);
function onCheck(){
    if(this.checked === true){
        alert("Checked!");
    }else{
        alert("Un Checked!");
    }
};

btnGetValue.addEventListener('click', onGetValue);
function onGetValue(){
    alert(checkBox.value);
};

btnCheckAll.addEventListener('change', onCheckAll);
function onCheckAll(){
    var isCheck = false;
    if(this.checked === true){
        isCheck = true;
    };
    for(let i = 0 ; i< lstCheckBox.length; i++){
        lstCheckBox[i].checked = isCheck;
    }

}