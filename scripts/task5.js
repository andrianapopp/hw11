const a = Number(prompt(`Сторона А`))
const b = Number(prompt(`Сторона В`))
const c = Number(prompt(`Сторона С`))

if (a + b > c && a + c > b && c + b > a){
    alert(`Треугольник существует`)
}else {
    alert(`Треугольник не существует`)
}