var btnAlert = document.getElementById('btnAlert');
var btnPrompt = document.getElementById('btnPrompt');
var btnConfirm = document.getElementById('btnConfirm');

btnAlert.addEventListener('click', onAlert);
function onAlert(){
    alert('Hello. my name Yi');
};

btnPrompt.addEventListener('click', onPrompt);
function onPrompt(){
let name = prompt('What is your name?');

alert('Hello ' + name);
};

btnConfirm.addEventListener('click', onConfirm);
function onConfirm(){
confirm('Do you know me?');
};
