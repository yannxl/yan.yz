var num = prompt('ingrese el numero de 16 bit')
var aux = []

let arr = String(num).split("");
arr.forEach(c => aux.push(c))

if (arr.length != 16) {
    alert('el numero mal')
} else{
    alert(arr)
    var xa = prompt('posicion del bit a mover')
    xa = parseInt(xa)
    xa = xa-1
    var xb = prompt('posicion a la que mover')
    xb = parseInt(xb)
    xb=xb-1
}

if(xa<xb){
    for(i=xa;i<xb;i++){
    arr[i]=0
    }
}else{
    for(i=xa;i>xb;i--){
        arr[i]=0
        }
}





if (arr[xb] === 0) {
    arr[xb]=arr[xa]
}else{
    arr[xb]=arr[xa]
}

console.log(arr)