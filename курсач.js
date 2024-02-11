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
var flagRaund ;
var flagWin = false;
var modif = 0;
function settings(  ) {
event.preventDefault();
var countK = document.getElementById('countK').value;
let warning = document.querySelector(".count");
let textName = warning.querySelector("label");
if (countK >= 10 && countK <= 30 ) {
    console.log("work") 
    possibilityI = countK
    textName.textContent = "Значение принято";
    var el = document.getElementById("set1");
    el.style.display = "none"
    modif = countK/10
} else {  console.log("work---")
  textName.textContent = "Значение должно быть от 10 до 30";
console.log("неправильное поле");}


}



function time(){
    var count = 15
var counter=setInterval(timer, 1000);
function timer()
{
   if (flagWin) {count=count}else{
 count=count-1;

 if ( document.getElementById("timer")) {
   document.getElementById("timer").innerHTML =  count + " секунд"
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
   // removeElementsByClass('timer');
  // alert("Поздравляем!")
       // window.location.href = "2уровень.html";
       let cont = document.createElement('button');
    cont.addEventListener('click', () => {
        window.location.href = "2уровень.html";
      })
      cont.innerHTML = 'перейти на следующий уровень';
    document.getElementById('count').appendChild(cont);
      
}
function finishLose(){
   // removeElementsByClass('timer');
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
    
    console.log(modif + "modif")

    var tableContainer = document.getElementById('table');
    var rand1 = getRandomInt(Math.floor(possibilityI / 2) -1) + 1;
    var rand2 = getRandomInt(Math.floor(possibilityI / 2) -1) + 1 + Math.floor(possibilityI / 2);

    var i = Array.from({ length: possibilityI }, (_, index) => index + 1);
    
    i.forEach(function (value) {
        var imgContainer = document.createElement('div'); // Обертка для изображения и текста
      
        if (value != rand1 && value !=rand2){
        imgContainer.classList.add('move'); // Добавление класса move
        
        }
         imgContainer.classList.add('image-container');

        var img = document.createElement('img');
        img.src = 'гирька1.png';
        img.alt = 'товар ' + value + 'кг';

        var text = document.createElement('span');
        text.textContent = value + 'кг';
        imgContainer.appendChild(img);
        imgContainer.appendChild(text);
        if (value != rand1 && value !=rand2){
        tableContainer.appendChild(imgContainer);
        }
        else{
            var left_blockContainer = document.getElementById('left_block');
            left_blockContainer.appendChild(imgContainer)}
    });

    var moveObjects = document.querySelectorAll(".move");
    moveObjects.forEach(function (obj) {
        var isDragging = false;
        var offsetX, offsetY;

        function startDragging(e) {
            if (!obj.classList.contains("moved")){
                obj.style.left = 0;
                obj.style.top = 0
                isDragging = true;
            }

            obj.style.cursor = "grabbing";
            //const rect = obj.getBoundingClientRect();
            offsetX = e.clientX ;
            offsetY = e.clientY;
            
        }

        function stopDragging() {
            isDragging = false;
            obj.style.cursor = "grab";

            if (!obj.classList.contains("moved")){
                obj.style.left = 0;
                obj.style.top = 0
            }
            //console.log("check")
            checkWeight();
        }

        function drag(e) {
            if (isDragging) {
                let newX = e.clientX - offsetX;
                let newY = e.clientY - offsetY;
                obj.style.left = newX + "px";
                obj.style.top = newY + "px";
               // console.log( e.clientY )
                if (e.clientX >document.body.clientWidth/2 && e.clientX < Math.min(document.body.clientWidth/2+450, document.body.clientWidth*0.95 )
                    && e.clientY > 50 && e.clientY < 450){
                    obj.classList.add('moved');
                } else{obj.classList.remove('moved');}
            }
        }

        function moveBack(e){
            obj.style.left = 0;
            obj.style.top = 0;
            obj.classList.remove('moved');
             checkWeight();
        }

        obj.addEventListener('mousedown', startDragging);
        obj.addEventListener('dblclick', moveBack);
        document.addEventListener('mouseup', stopDragging);
        document.addEventListener('mousemove', drag);


        function checkWeight(){
            var rSum = 0
            var rightWeight = document.querySelectorAll(".moved")
           if (flagRaund<4){
            for ( var a= 0; a < rightWeight.length; a++){
                var textContent = rightWeight[a].querySelector('span').textContent;
                rSum +=  parseInt(textContent)
            }
            var leftBlockMoveElements = document.getElementById('left_block').children;
        var lSum = 0
        for (var a = 0; a < leftBlockMoveElements.length; a++) {
            var element = leftBlockMoveElements[a];
            var textContent = element.querySelector('span').textContent;
                lSum +=  parseInt(textContent)
                }
            if (lSum > rSum){
                    var backgr = document.getElementById("content")
                    backgr.style.backgroundImage = "url('лево.jpg')" 
            } else{
                if (lSum==rSum){
                    
                    var storedData = localStorage.getItem('users');
                    var users = JSON.parse(storedData) || [];
                    var current_user = users[users.length-1];
                    current_user.count += (1* modif);
                    document.getElementById('countDisplay').textContent = current_user.count ;
            
                    var json = JSON.stringify(users);
                    localStorage.setItem('users', json);
                    console.log('modif'); 
                    startGame()
                }
                 else {
                var backgr = document.getElementById("content")
                backgr.style.backgroundImage = "url('право.jpg')" }
            }
        

            

        }}
    });

    
   
};function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}