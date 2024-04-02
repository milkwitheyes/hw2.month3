document.getElementById('getUserBtn').addEventListener('click', function() {
    getUserInfo();
});

document.getElementById('userId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getUserInfo();
    }
});

function getUserInfo() {
    var userId = document.getElementById('userId').value;

    if (userId >= 1 && userId <= 10) {
        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(data => {
            displayUserInfo(data);
        })
        .catch(error => {
            console.error('Ошибка получения данных:', error);
        });
    } else {
        alert('Введите число от 1 до 10');
    }
}

function displayUserInfo(user) {
    var userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
        <h3>Информация о пользователе:</h3>
        <p><strong>Имя:</strong> ${user.name}</p>
        <p><strong>Имя пользователя:</strong> ${user.username}</p>
        <p><strong>Телефон:</strong> ${user.phone}</p>
    `;
}