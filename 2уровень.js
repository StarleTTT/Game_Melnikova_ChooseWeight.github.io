const EASY_PHRASE = ["Выбери самый легкий предмет",
                "Выбери самый тяжелый предмет", "выбери любой предмет легче книги",
               "выбери предмет тяжелее телевизора"];
var suppPhrase = new Array();
var diff = 0;
var balance = 0;
document.addEventListener('DOMContentLoaded', function(){
    var storedData = localStorage.getItem('users');
    var users = JSON.parse(storedData) || [];
    var current_user = users[users.length-1];
    document.getElementById('countDisplay').textContent = current_user.count
    balance =  current_user.count;
});
function end() {
    window.location.href = "рейтинг.html";
}
var flagRaund = 0 ;
var flagWin = false;
var modif = 0;
function time(){
    var count = 15
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
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

function startGame(){

flagRaund +=1
if(flagRaund==1) 
{
   time();
   removeElementsByClass('starts')
   removeElementsByClass('set1')
   startLevel()}
else{
   if(flagRaund<4)
       {startLevel()}
       else { if(flagRaund==4) finishWin()}
}}

function finishWin(){
   event.preventDefault();
   removeElementsByClass('timer');
  alert("Поздравляем!")
      let cont = document.createElement('button');
   cont.addEventListener('click', () => {
       window.location.href = "3уровень.html";
     })
     cont.innerHTML = 'перейти на следующий уровень';
   document.getElementById('count').appendChild(cont);
}

function finishLose(){
   removeElementsByClass('timer');
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
   let cnt = EASY_PHRASE.length
   let randomPhrase 
   do {
      randomPhrase =  getRandomInt(cnt)
   if (suppPhrase.includes(randomPhrase)){
      randomPhrase = null
   }else suppPhrase.push(randomPhrase)
   }
   while (randomPhrase == null)
   console.log(randomPhrase)
   document.getElementById("question").innerHTML = EASY_PHRASE[randomPhrase];
   var parentDiv = document.getElementById('content');
   parentDiv.innerHTML = '';
  removeElementsByClass('replay');
  
   //console.log(modif + "modif")

   var contentContainer = document.getElementById('content');
   var element = Array.from({ length: 6 }, (_, index) => index + 1);
   
   element.forEach(function (value) {
   // console.log("work"+ value)
        let weightClass = 'elem'+value
       var img = document.createElement('div');
       img.classList.add(weightClass)
       var containerLeft =  ( window.innerWidth - contentContainer.clientWidth) /2;
       var containerTop = contentContainer.offsetTop;

         img.style.left = Math.max(containerLeft+250, Math.min( containerLeft + contentContainer.clientWidth - img.clientWidth -250,containerLeft + getRandomInt(contentContainer.clientWidth - img.clientWidth))) + 'px';
       img.style.top =  Math.max(50, Math.min(contentContainer.clientHeight-400, containerTop + getRandomInt(contentContainer.clientHeight - img.clientHeight-100))) + 'px';
        contentContainer.appendChild(img);
        img.addEventListener('mousedown', getWeight);
   });
   contentContainer.classList.add('animate-elements');
   let touched = new Array();
   function getWeight(e){ 
      let weight = e.currentTarget.className.split(' ').find(className => className.startsWith('elem'));
      touched.push(weight.slice(4));
      console.log(touched);
      Check()
   }

   function Check(){
      switch (diff){
         case 0:{
            switch (randomPhrase){
               case 0:{
                 
                  if (touched[0] == 1){
                     addCount();
                  }else{if (touched.length != 0){touched=[]} }
                  break;
               }
               case 1:{
                  if (touched[0] == 6){
                     addCount()
                  }else{if (touched.length != 0){touched=[]} }
                  break
               }
               case 2:{
                  if (touched[0] <3){
                     addCount()
                  }else{if (touched.length != 0){touched=[]} }
                  break;
               }
               case 3:{
                  if (touched[0] > 4){
                     addCount()
                  }else{if (touched.length != 0){touched=[]} }
                  break;
               }
   
            }
         }
         case 1:{}
      }
   }
   /*
   
*/


};

function addCount(){
   var storedData = localStorage.getItem('users');
   var users = JSON.parse(storedData) || [];
   var current_user = users[users.length-1];
   current_user.count += (1);
   document.getElementById('countDisplay').textContent = current_user.count ;
   
   var json = JSON.stringify(users);
   localStorage.setItem('users', json);
   console.log('modif'); 
   startGame()
}


function removeElementsByClass(className) {
   var elements = document.getElementsByClassName(className);
   while (elements.length > 0) {
       elements[0].parentNode.removeChild(elements[0]);
   }
}