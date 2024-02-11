var balance = 0;
document.addEventListener('DOMContentLoaded', function(){
    var storedData = localStorage.getItem('users');
    var users = JSON.parse(storedData) || [];
    var current_user = users[users.length-1];
    document.getElementById('countDisplay').textContent = current_user.count
    balance =  current_user.count;
});
var HargI = 20;
var LightI = 10;
var possibilityI = HargI;
var maxCount
var flagRaund ;
var flagWin = false;
var modif = 0;
function settings(  ) {
event.preventDefault();
var countK = document.getElementById('countK').value;
let warning = document.querySelector(".count");
let textName = warning.querySelector("label");
if (countK >= 2 && countK <= 10 ) {
    console.log("work") 
    possibilityI = countK
    textName.textContent = "Значение принято";
    var el = document.getElementById("setK");
    el.style.display = "none"
    var e2 = document.getElementById("setW");
    e2.style.display = "block"
    modif = modif+ countK/2
} else {  alert("Значение должно быть от 2 до 10")}


}

function settings1(  ) {
    event.preventDefault();
    var countW = document.getElementById('countW').value;
    let warning = document.querySelector(".count");
    let textName = warning.querySelector("label");
    if (countW >= 2 && countW <= 100 ) {
        console.log("work") 
        maxCount = countW
        textName.textContent = "Значение принято";
        var el = document.getElementById("setW");
        el.style.display = "none"
        var e2 = document.getElementById("start");
        e2.style.display = "block"
        modif = modif+ maxCount/2
    } else {  alert("Значение должно быть от 2 до 100")}
    }



function time(){
     var count = 15
var counter=setInterval(timer, 1000);
function timer()
{
    if (flagWin) {count=count}else{
  count=count-1;

  if ( document.getElementById("timer")) {
    document.getElementById("timer").innerHTML = count
  if (count <= 0)
  {
     clearInterval(counter);

  }
  if (count == 0){ finishLose(); }}}
}}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function end() {
    window.location.href = "рейтинг.html";
}
function startGame(){
    if (flagRaund == null ) {flagRaund = 0}
    
    var e2 = document.getElementById("answer");
    e2.style.display = "block"
console.log(flagRaund +"flag")
flagRaund +=1
console.log(flagRaund)
if(flagRaund==1) 
{
    time();
    removeElementsByClass('starts')
    removeElementsByClass('set1')
    console.log("replay")
    startLevel()}
else{
    if(flagRaund<4)
        {startLevel()}
        else { if(flagRaund==4) finishWin()}
}}

function finishWin(){
    event.preventDefault();
    flagWin = true
    var e2 = document.getElementById("timer");
    e2.style.display = "none"
   alert("Поздравляем!")
       // window.location.href = "2уровень.html";
       let cont = document.createElement('button');
    cont.addEventListener('click', () => {
        window.location.href = "рейтинг.html";
      })
      cont.innerHTML = 'перейти на следующий уровень';
    document.getElementById('count').appendChild(cont);
      
}
function finishLose(){
    var e2 = document.getElementById("timer");
    e2.style.display = "none"
    removeElementsByClass('image-container');
    removeElementsByClass('starts');
   alert("попробуйте заново!")
       
       let btn = document.createElement('button');
       btn.addEventListener('click', () => { 
        storedData = localStorage.getItem('users');
        var users = JSON.parse(storedData) || [];
        var current_user = users[users.length-1];
        console.log(balance + "баланс")
        current_user.count = balance;
        var json = JSON.stringify(users);
        localStorage.setItem('users', json);
      })

    btn.innerHTML = 'Перепройти уровень';
    document.getElementById('count').appendChild(btn);
}

 function startLevel() {
    removeElementsByClass('image-container');
   removeElementsByClass('replay');
    
    console.log(modif + "modif")


    var i = Array.from({ length: possibilityI-1 }, (_, index) => index + 1);
    
    i.forEach(function (value) {
        var imgContainer = document.createElement('div'); 
         imgContainer.classList.add('image-container');

        var img = document.createElement('img');
        img.src = 'гирька1.png';

        var text = document.createElement('span');
        text.textContent = getRandomInt(maxCount-1)+1 + 'кг';
        imgContainer.appendChild(img);
        imgContainer.appendChild(text);
        if (value <= Math.floor(possibilityI / 2)){
            var right_blockContainer = document.getElementById('right_block');
            right_blockContainer.appendChild(imgContainer)
        }
        else{
            var left_blockContainer = document.getElementById('left_block');
            left_blockContainer.appendChild(imgContainer)}
    })
    var imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    var img = document.createElement('img');
    img.src = 'гирька1.png';

    var text = document.createElement('span');
    text.textContent =   '__ кг';
    imgContainer.appendChild(img);
    imgContainer.appendChild(text);
        var right_blockContainer = document.getElementById('right_block');
        right_blockContainer.appendChild(imgContainer)
    
    ;


    
   
};function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }}

