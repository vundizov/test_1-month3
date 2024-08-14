//Задача 1
const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return (regExp.test(str))
}
console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false






// Задача 2
// setInterval(()=> {
//     console.log('прошла секунда')
// },1000)

//Задача 3
const count = () => {
    let i = 1;
    const interval = setInterval(()=> {
        i++
        console.log(i)
        if (i >= 10){
            clearInterval(interval)
        }
    },100);
    console.log(interval)
}
count()


// Задача 4
const backgroundColor = document.querySelector('.wrapper')
const blockColor = document.querySelector('.block')

blockColor.onclick = (e)=> {
    e.classList.contains('.colorBlue')
}

