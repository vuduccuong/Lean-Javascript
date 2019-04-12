function isSNT(numb){
    var sqrtNum = Math.sqrt(numb);
    if(numb<1) return false;
    if(numb===2) return true;
    if(numb%2===0) return false;
    else{
        for(var i=3; i<=sqrtNum; i+=2){
            if(numb%i===0){
                return false;
            }
        }
        return true;
    }
}

var btnLoop = document.getElementById('btnLoop');
btnLoop.addEventListener('click', onLoop);
function onLoop(){
    let number = parseInt(document.getElementById('number').value);
    var content = "";
    for(let i=0;i<number;i++){
        if(isSNT(i)){
        content+="<p>"+i+"</p>";
    }
    };
    let html = document.getElementById('result');
    html.innerHTML = content;
}