/* Задача 1
Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("GOOD"), 3000);
})
promise
    .then((result) => {
        console.log(result);
    })

//=================================================================================================================

/* Задача 2
Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).\*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("ERROR!!!!")), 3000);
})
promise
    .catch((error) => {
        console.log(error);
    });

//=================================================================================================================

/* Задача 3
Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.*/

function getRandonTimeOut(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let promiseFirst = new Promise((resolve, reject) => {
    let randonTimeOut = getRandonTimeOut(1, 6)
    setTimeout(() => resolve(randonTimeOut), randonTimeOut * 1000);
})
promiseFirst
    .then((result) => {
        console.log(result);
    })

let promiseSecond = new Promise((resolve, reject) => {
    let randonTimeOut = getRandonTimeOut(1, 6)
    setTimeout(() => resolve(randonTimeOut), randonTimeOut * 1000);
})
promiseSecond
    .then((result) => {
        console.log(result);
    })
let promiseThird = new Promise((resolve, reject) => {
    let randonTimeOut = getRandonTimeOut(1, 6)
    setTimeout(() => resolve(randonTimeOut), randonTimeOut * 1000);
})
promiseThird
    .then((result) => {
        console.log(result);
    })

Promise.all([promiseFirst, promiseSecond, promiseThird])
    .then(array => array.reduce((sum, item) => {
        return sum + item
    }))
    .then((result) => {
        console.log(result);
    })

//=================================================================================================================

/* Задача 4
Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then(result => {
        return result.filter(item => item.id % 2 === 0)
    })
    .then((result) => {
        console.log(result);
    });

//=================================================================================================================

/* Задача 5
Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1*/

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users?id=1")
    const result = await res.json()
    console.log('user', result)

    result.forEach((user) => {
        const { name, email } = user;
        const postElement = renderUser(name, email);
        document.body.append(postElement)
    });
}
getUsers()

function renderUser(name, email) {
    let container = document.createElement('div')
    container.style = `
    border: 1px solid red;
    padding: 10px;
    `
    const userNameElement = document.createElement('h2')
    userNameElement.innerHTML = name

    const emailElement = document.createElement('p')
    emailElement.innerHTML = email

    container.append(userNameElement, emailElement)
    return container;
}
renderUser()

//=================================================================================================================

/* Задача 6
Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2*/

let promptId = prompt('Enter the number ID user (1-10)')
console.log(promptId)
async function getTodo() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${promptId}/todos`)
    const users = await res.json()
    console.log('users', users)
    let usersHtml = "";
    for (let i = 0; i < users.length; i++) {
        usersHtml +=
            `<div class="card" style="border: 1px solid green; padding: 10px"
       <h2>UserId: ${users[i].userId}</h2>
       <h3>Title: ${users[i].title}</h3>
       ${users[i].completed ? `<input type='checkbox' checked>` : `<input type='checkbox'>`}
       </div>`;
    }
    const body = document.querySelector('body')
    body.innerHTML = usersHtml;
}
    getTodo()

//=================================================================================================================

/* Задача 7
Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото

{
  "albumId": 1,
  "id": 4,
  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  "url": "https://via.placeholder.com/600/d32776",
  "thumbnailUrl": "https://via.placeholder.com/150/d32776"
},
Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3*/

let promptId = prompt('Enter the number ID photo (1-50)')

async function getPhoto() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${promptId}`)
    const promptIdPhoto = await res.json()
    console.log('Photo', promptIdPhoto)

    let result = `<div class="photo" style="border: 1px solid green; padding: 10px"
    <h3>AlbumId: ${promptIdPhoto[0].albumId}</h3>
    <h3>ID: ${promptIdPhoto[0].id}</h3>
    <h4>Title: ${promptIdPhoto[0].title}</h4>
    <img id="imgId" src="${promptIdPhoto[0].thumbnailUrl}">
    </div>`;

    const body = document.querySelector('body')
    body.innerHTML = result;

    let clickPhoto = document.querySelector("#imgId")
    clickPhoto.onclick = function () {
        if (clickPhoto.src === promptIdPhoto[0].thumbnailUrl) {
            clickPhoto.src = promptIdPhoto[0].url;
        } else if (clickPhoto.src === promptIdPhoto[0].url) {
            clickPhoto.src = promptIdPhoto[0].thumbnailUrl;
        }
    };
}
getPhoto()