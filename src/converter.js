export default function converter(value, unit) {
    let oper = 0
    let result = 0

    if (unit == "kg") {
        oper = 2.205
        result = value * oper
    } else if (unit == "lbs") {
        oper = 0.454
        result = value * oper
    } else {
        console.log("Ingrese kg o lbs")
    }

    return result
}