var btnLoop = document.getElementById('btnLoop');
btnLoop.addEventListener('click', onLoop);
function onLoop(){
    let number = parseInt(document.getElementById('number').value);
    var content = "";
    for(let i=0;i<number;i++){
        content+="<p>"+i+"</p>";
    };
    let html = document.getElementById('result');
    html.innerHTML = content;
}