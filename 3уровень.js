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




function answer(){
    event.preventDefault();
var countA = document.getElementById('countA').value;
console.log(parseInt(countA)+parseInt(rSum()), lSum())
if (parseInt(countA)+parseInt(rSum())==lSum()) {
    var storedData = localStorage.getItem('users');
                var users = JSON.parse(storedData) || [];
                var current_user = users[users.length-1];
                current_user.count += (1* modif);
                document.getElementById('countDisplay').textContent = current_user.count ;
        
                var json = JSON.stringify(users);
                localStorage.setItem('users', json);
                console.log('modif'); 
                startGame()
} else {  alert("нет")}
}





function settings(  ) {
event.preventDefault();
var countK = document.getElementById('countK').value;
let warning = document.querySelector(".count");
let textName = warning.querySelector("label");
if (countK >= 2 && countK <= 8 ) {
    console.log("work") 
    possibilityI = countK
    textName.textContent = "Значение принято";
    var el = document.getElementById("setK");
    el.style.display = "none"
    var e2 = document.getElementById("setW");
    e2.style.display = "block"
    modif = modif+ countK/2
} else {  alert("Значение должно быть от 2 до 8")}


}

function settings1(  ) {
    event.preventDefault();
    var countW = document.getElementById('countW').value;
    let warning = document.querySelector(".count");
    let textName = warning.querySelector("label");
    if (countW >= 2 && countW <= 30 ) {
        console.log("work") 
        maxCount = countW
        textName.textContent = "Значение принято";
        var el = document.getElementById("setW");
        el.style.display = "none"
        var e2 = document.getElementById("start");
        e2.style.display = "block"
        modif = modif+ maxCount/2
    } else {  alert("Значение должно быть от 2 до 30")}
    }



function time(){
     var count = 30
var counter=setInterval(timer, 1000);
function timer()
{
    if (flagWin) {count=count}else{
  count=count-1;

  if ( document.getElementById("timer")) {
    document.getElementById("timer").innerHTML = count + " секунд"
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
    var el = document.getElementById("content");
    el.style.backgroundImage = "url('середина.png')" 
    if (flagRaund == null ) {flagRaund = 0}
    var e2 = document.getElementById("answer");
    e2.style.display = "flex"
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
    removeElementsByClass('answer')
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
      cont.innerHTML = 'открыть рейтинг';
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
             location.reload();
     
           })
     
         btn.innerHTML = 'Перепройти уровень';
         document.getElementById('count').appendChild(btn);
     }

 function startLevel() {






    removeElementsByClass('image-container');
   removeElementsByClass('replay');
    
    console.log(rSum()+' ',lSum())
    

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
        if (value < Math.floor(possibilityI / 2)){
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



    
   
};


function lSum(){
    var leftBlockMoveElements = document.getElementById('left_block').children;
    var lSum = 0
    for (var a = 0; a < leftBlockMoveElements.length; a++) {
        var element = leftBlockMoveElements[a];
        var textContent = element.querySelector('span').textContent;
            lSum +=  parseInt(textContent)
            }
            return lSum; 
}
function rSum(){
    var rightBlockMoveElements = document.getElementById('right_block').children;
    var rSum = 0
    for (var a = 0; a < rightBlockMoveElements.length; a++) {
        var element = rightBlockMoveElements[a];
        var textContent = element.querySelector('span').textContent;
        if (textContent !='__ кг'){
        rSum +=  parseInt(textContent)
            }}
            return rSum;
}


function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }}

