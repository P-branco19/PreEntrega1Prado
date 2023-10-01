function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    alert(`Bienvenido ${nombre} ${apellido}`)
}

solicitarNombre()

let contraseña = "7771"
let contraseñaIngresada = prompt("Ingrese su contraseña para iniciar sesión")

if (contraseñaIngresada == contraseña) {
    alert("Inicio de sesión exitoso")
} else {
    alert("Acceso denegado")
}

let genero = prompt("¿Desea ver ropa de hombre o de mujer?")

switch (genero) {
    case "hombre":
        console.log("Te vamos a mostrar ropa de hombre")
        break
    case "mujer":
        console.log("Te vamos a mostrar ropa de mujer")
        break
    default:
        console.log("Te vamos a mostrar ropa unisex")
        break
}