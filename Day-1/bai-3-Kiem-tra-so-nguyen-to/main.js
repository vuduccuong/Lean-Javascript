var btnCheck = document.getElementById('check');
btnCheck.addEventListener('click', onCheck);
function onCheck(){
    var number = parseFloat(document.getElementById('number').value);
    
    var kq = CheckSNT(number);
    render(kq);
};

//Kiểm tra số nguyên tố
function CheckSNT(number){
    if(number<1) return 'false';
    if(number === 2) return 'true';
    if (number % 2 === 0){
        return false;
      }
    for(let i = 3; i<number; i=i+2){
        if(number%i===0){
            return 'false';
        }else{
            return 'true';
        }
    }
    return 'false';
 }

function render(str){
    debugger;
    var html = document.getElementById('result');
    html.innerHTML = str;
};