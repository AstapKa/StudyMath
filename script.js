// alert('Hello!')

// confirm('вы учите JS')



// const skill = document.getElementById('skill') 
// const isLove = document.getElementById('isLove')
// const string = document.getElementById('string')

// const skillText = prompt("какой язык вы учите?", "пока не в курсе" )
// const isLoveValue = confirm('вы любите изучаемый язык?')


// console.log(isLoveValue)


// skill.innerText = skillText
// isLove.innerText = isLoveValue
// string.innerHTML = "str"

// const example = document.getElementById('example')
// console.log(example.innerHTML)
// console.log(example.innerText)

// let a = "seven"
// a = 7

// const b = 8
// b = 7

//STRING

// const str1 = 'I\'m OK' 
// const str2 = "Sasha \nsays \"hello\"" 
// const str3 = `I'm 
// say ${str1}`
// const str4 = "i'm say..."

// console.log(str1)
// console.log(str2)
// console.log(str3)

//NUMBER
//+ - * / **

// const num1 = 75 + 15
// const num2 = 79 ** 3
// console.log(typeof "5")
// const rem = 8 * "a"
//NaN not a number
// console.log(rem)
// alert(num2)
// console.log(num1)
// const inf = 17 / 0
//от -(2**53-1) до (2**53-1)

// console.log(9999999999999999)

//BIGINT
// const bigint = 10312312n

//BOOLEAN
//true or false
// < > >= <= <== >== == ===
// const bool = "a" > "8"
// console.log(bool)


//NULL

// let empty = null
// console.log(empty, typeof empty)

//UNDEFINED

// let box = undefined
// console.log(box, typeof box)

//SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

// //OBJECT
// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true,
// }
// // console.log(obj.name)
// // console.log(obj['name'])

// obj.job = "Google"
// const array = ["Аня", 18, false]
// // array.job = "Facebook"
// array[3] = "Facebook"

// console.log(array)
// console.log(array[0])

// const variant = "obtion1"
// console.log(5=="5")
// //сравнивавет значение
// console.log(5==="5")
//сравнивает значение и тип
// console.log("abc" > 15)
// console.log(null==0) - false
// console.log(null>=0) - true
// console.log(null<=0) - true
// undefined всегда false
// console.log(undefined == null)
// console.log(typeof +"15")
// console.log(+"abc")
// console.log(typeof String(15))

// console.log(typeof (15+""))

// console.log(typeof Boolean(15))

// console.log(typeof Boolean(null))

// const userName = prompt("Who you are?", "anonim")
// //userName = null

// if (userName === "admin") {
//     alert("Hello boss!")
// } else if(userName === "anonim"  || !userName) {
//     alert("I don't know you..")
// } else {
//     alert (`Hi ${userName}`)
// }

// const counts = prompt("You want count for?", 10)
// let i = 10
// while (i <= counts) {
//     console.log(i++)
// // i=i+1
// //  i += 1
// //  i++
// // ++i
// }

// do {
//     console.log(i++)
// } while (i <= counts)

// console.log(i)

// let arr = [4, 5, 6]
// arr.push(7)
// console.log(arr)

// const arr = []
// for(let i = 0; i <= 50; ++i) {
//     arr.push(i)
// }
// // console.log(arr)
// const newArr = []

// for (elem of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         newArr.push(elem)
//     }
// }
// console.log(newArr)

// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronezh"
// }
// for (key in obj) {
//     console.log(key, obj[key])

// }

//FUNCTION

//declaration
// console.log(scream(15, 10))
function scream(a, b) {
    //     const result = a * b
    //     return result
    return a * b
}
// scream()
// console.log(scream(15, 10))

//expression
// wowScream()
const wowScream = function () {
    alert("WOOW")
}
// wowScream()

//arrow
const arrow = () => {
    alert("arrow is in the sky")
}
// arrow()

//ИГРА
//нажав на кнопку Начать игра запускается, генерируется задача, 
//пользователь может ввести ответ , должна появиться копка Проверить
//нажав Проверить мы сравнивает ввод пользователя с ответом
// вывести результат и правильное значение, также сменить кнопку на Начать заново

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)

    // let symbol 
    // if (Math.random() > 0.5) {
    //         symbol = "+"
    // } else {
    //     symbol = "-"
    // }

    const symbol = (Math.random() > 0.5) ? "+" : "-"

    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}
//  console.log(getTask())


// console.log(getRandomNumInRange(0,100))
// console.log(getRandomNumInRange(10,100))
// console.log(getRandomNumInRange(0,1000))
// console.log(getRandomNumInRange(400,1000))

// console.log(randomValue)

const gameElements = document.getElementById("my_game").children
// console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        // генерировать задачу и ответ
        const task = getTask()
        // показываю задачу пользователю
        userTask.innerText = task
        userAnswer.hidden = false
        // меняю кнопку 
        btnGame.innerText = "Проверить"
        // меняю состояние
        toggleGameState()
        // gameState.taskInProcess = true
    } else {
        //сравнить ответ юзера с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат 
        userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
        //(поздравление) 
        title.innerText = "Вы п" + ((isRight) ? "обедили!" : "роиграли(")
        //поменять кнопку и состояние
        btnGame.innerText = "Начать заново"
        gameState.taskInProcess = false
    }
}


btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    //console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})


// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }
// console.log(gameElements)

// console.dir(document)

const chooseEl = document.querySelectorAll(".choose_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

// const choosedState = {
//     countElements: 0, 
// }
// const changeCount = (value) => {
//     choosedState.countElements += value
//     counterEl.innerText = choosedState.countElements
// } 

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    if (e.target.className === "") {
        e.target.className = "choose_element"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}

for (let i = 0; i < chooseEl.length; i++) {
    chooseEl[i].addEventListener("click", eventFunc)
    // выбрать элемент, т.е. выделить его с помощью класса
    // chooseEl[i].className = "choose_element"
    // console.log(e)
    // запустить счетчик  
}
// chooseEl[2].removeEventListener("click", eventFunc)

// const timeIsOver = () => {
//     alert("время вышло")
// }
// setTimeout(timeIsOver, 2000)

// const alarm = setInterval(timeIsOver, 3000)


// const alarm = setInterval(() => {
//     let wantToSleep = confirm("Want you sleep?")    
//     if(wantToSleep) {
//         console.log("tic")
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)

const postsBlock = document.querySelector(".Posts_block_container")
const showPostsBTN = document.querySelector(".posts_block button")

const func = () => 5



function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const postItem = document.createElement("p")

    postTitle.innerText = title
    postBody.innerText = body

    postItem.append(postTitle, postBody)
    postsBlock.append(postItem)
}

function getPosts () {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        // console.log(res)
        return res.json()
    })
    .then(data => {
        for (el of data) {
            addPost(el.title, el.body)
        }
        // addPost(data[7].title, data[7].body)
        // console.log(data)
    })
    .catch((err) => {
        console.log(err)
        console.log(err.message)
    })
}
// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify ({
//             // title: title,
//             // body: body,
//             // userID: userID,
//             title,
//             body,
//             userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//     })
//         .then(res => {
//             console.log(res)
            
//         })
//             .catch(err => console.log(err.message))
//         }

//         createPost("title", "body", 15)

showPostsBTN.onclick = getPosts