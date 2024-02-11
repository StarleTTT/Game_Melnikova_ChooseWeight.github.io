function sign(e) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    let warning = document.querySelector(".content");
    let textName = warning.querySelector("label");

    if (username == "") {
        textName.textContent = "Заполните поле";
        console.log("неправильное поле");
    } else {
        console.log("working");
        let count = 1;
        var storedData = localStorage.getItem('users') || '[]';
        var users = JSON.parse(storedData);
        console.log('user added');
        var lastUserId =parseInt( localStorage.getItem('last_user_id') || '0' )
        console.log(lastUserId)
        var id = lastUserId ;

        var user = {
            id: id,
            username: username,
            count: count
        };

        users.push(user);
        var jsonId = JSON.stringify(lastUserId+1);
        localStorage.setItem('last_user_id', jsonId)
        var json = JSON.stringify(users);
        localStorage.setItem('users', json);
        console.log('user added');

       window.location.href = "курсач.html";
    }
}