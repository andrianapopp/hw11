const number = prompt(`Введите целое число`)
const length = number.length


if (length === 1 && number >=0){
    alert(`Число ${number} однозначное положительное`)
} else if (length === 2 && number >=0){
    alert(`Число ${number} двухзначное положительное`)
} else if (length === 3 && number >=0){
    alert(`Число ${number} трехзначное положительное`)
} else if (length === 2 && number <=0){
    alert(`Число ${number} однозначное отрицательное`)
} else if (length === 3 && number <=0){
    alert(`Число ${number} двухзначное отрицательное`)
} else if (length === 4 && number <=0){
    alert(`Число ${number} трехзначное отрицательное`)
} else{
    alert(`Значение неверное`)
}


