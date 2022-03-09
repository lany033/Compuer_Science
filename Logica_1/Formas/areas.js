var figura = prompt("Esoger figura: ")

if (figura === "cuadrado"){
    var lado = prompt("Ingresar longitud de lado: ")
    var perimetro = lado * 4
    var area = lado**2
    alert("el area del cuadrado es:" + area + "y su perimetro es:"+perimetro)
}

if (figura === "triangulo"){
    var ladoT = prompt("Ingresar longitud de base: ")
    var alturaT= prompt("Ingresar altura")
    var perimetroT = ladoT * 3
    var areaT = alturaT*ladoT
    alert("el area del triangulo es:" + areaT + "y su perimetro es:"+perimetroT)
}

if (figura === "rectangulo"){
    var ladoA = prompt("Ingresar longitud de lado a: ")
    var ladoB = prompt("Ingresar longitud de lado b: ")
    var perimetroR = (ladoA * 2)+(ladoB * 2)
    var areaR = ladoA*ladoB
    alert("el area del rectangulo es:" + areaR + "y su perimetro es:"+perimetroR)
}