document.addEventListener('DOMContentLoaded', function(){
    var storedData = localStorage.getItem('users');
    var users = JSON.parse(storedData);

    // Сортировка пользователей по убыванию значения count
    users.sort((a, b) => b.count - a.count);

    users.forEach(function(user){
        let row = document.createElement('tr');
        row.innerHTML = `<td>${user.username}</td><td>${user.count}</td>`;
        document.querySelector('.leaderboard').appendChild(row);
    });
});

function alerted(){
    window.location.href = "index.html";
}
