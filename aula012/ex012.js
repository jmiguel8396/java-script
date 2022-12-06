var h1 = new Date
var hora = h1.getHours()
var m1 = new Date
var minuto = m1.getMinutes()
if (hora <= 01) {
    console.log(`São exatamente ${hora} horas ` + "e " + `${minuto} minuto`)
    console.log('Boa madrugada!')
} else if (hora <= 06) {
    console.log(`São exatamente ${hora} horas ` + "e " + `${minuto} minutos`)
    console.log('Boa madrugada!')
} else if (hora <= 12) {
    console.log(`São exatamente ${hora} horas ` + "e " + `${minuto} minutos`)
    console.log('Bom dia!')
} else if (hora <= 19) {
    console.log(`São exatamente ${hora} horas ` + "e " + `${minuto} minutos`)
    console.log('Boa tarde!')
} else if (hora <= 24) {
    console.log(`São exatamente ${hora} horas ` + "e " + `${minuto} minutos`)
    console.log('Boa noite!')
}