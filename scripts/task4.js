const number1 = prompt(`Первое число`)
const number2 = prompt(`Второе число`)
const number3 = prompt(`Третье число`)

if (number1 > number2 && number1>number3){
    alert(`Максимальное число : ${number1}`)
} else if (number2 > number1 && number2 > number3){
    alert(`Максимальное число : ${number2}`)
} else if (number3 > number1 && number3 > number2){
    alert(`Максимальное число : ${number3}`)
}