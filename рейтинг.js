document.addEventListener('DOMContentLoaded', function(){
    var storedData = localStorage.getItem('users');
    var users = JSON.parse(storedData)
users.forEach(function(users){
    let row = document.createElement('tr')
    row.innerHTML = `<td >${users.username}</td><td>${users.count}</td>`
    document.querySelector('.leaderboard').appendChild(row)
});
}
    )
   function alerted(){
        window.location.href = "index.html";}