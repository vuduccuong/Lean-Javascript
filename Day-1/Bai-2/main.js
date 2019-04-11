const keyLocal = 'JS1';

var strResult = localStorage.getItem(keyLocal);

var arrResults;
if(strResult){
    arrResults = JSON.parse(strResult);
}else{
    arrResults=[];
}

var btnAddNew = document.getElementById('btnNewAction');
btnAddNew.style.display = 'none';

//Click nút tính toán
let btnAction = document.getElementById('action');
btnAction.addEventListener('click', onAction);
function onAction(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let operator = document.getElementById('operator').value;
    let num2 = parseFloat(document.getElementById('num2').value);
    if(!num1 || num1 === '' && !num2 || num2 === ''){
        alert ("Chưa nhập dữ liệu!");
        return;
    }
    var kq = 0;
    switch(operator){
        case "+":
        kq = num1+num2; 
        break;
        case "-":
        kq = num1-num2; 
        break;
        case "*":
        kq = num1*num2; 
        break;
        case "/":
        if(num2 ===0){
            kq="Lỗi chia số 0"
        }else{
        kq = num1/num2; 
        }
        break;
        default:
    }
    document.getElementById('result').value = kq;
    btnAddNew.style.display = 'block';
}

let btnNewAction = document.getElementById('btnNewAction');
btnNewAction.addEventListener('click', onSave);
function onSave(){
    let num1 = document.getElementById('num1');
    let operator = document.getElementById('operator');
    let num2 = document.getElementById('num2');
    let result = document.getElementById('result');

    var data = {
        num1:num1.value,
        operator: operator.value,
        num2: num2.value,
        result: result.value
    };
    arrResults.push(data);
    localStorage.setItem(keyLocal,JSON.stringify(arrResults));

    num1.value='';
    operator.value='+';
    num2.value = '';
    result.value = '';
    btnAddNew.style.display = 'none';

    render(arrResults);


}

function render(arrResults){
    let html = document.getElementById('table-results');
    var content = arrResults.map(item => {
        return "<tr><td>Bạn vừa thực hiện phép tính : </td><td>"+item.num1+"</td><td>"+item.operator+"</td><td>"+item.num2+"</td><td>=</td><td>"+item.result+"</td></tr>"
    });

    html.innerHTML = content.join('');
}

render(arrResults);