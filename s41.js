//método indexOf
//localizar valores en un array

var array = [36, 327, 1194, 365, 2, 39, 24];
console.log(array.indexOf(327)) //se busca el elemento 327 en el arreglo, por lo tanto el elemento se encontrará en el indice 0
console.log(array.indexOf(37)) //se busca el elemento 37, por lo tanto el elemento no se encontrara, por lo que el resultado sera -1
console.log(array.indexOf(1194, 2)) //se busca el elemento 9 en el indice 2, por lo tanto el elemento se encontrara en ese indice
console.log(array.indexOf(36, -1)) //se busca el elemento 36 en el indice -1, por lo tanto ele elemento no se encontrara, por ende el resultado es -1
console.log(array.indexOf(36, -3)) //se busca el elemento 36 en el indice -3 por lo tanto el elemento se encontrara en el indice 0


var array2 = ["luciana", "fer", "mariposa", "cristina", "aguilera","fer"];
console.log("LastIndexOf")
console.log(array2.lastIndexOf("fer")) //se busca el elemento"fer" em el arreglo, por lo tanto el elemnto se encontro en el indice
console.log(array2.lastIndexOf("capullo")) //se busca el elemento "capullo" 
console.log(array2.lastIndexOf("fer",2))//1
console.log(array2.lastIndexOf("fer", -1))//-1

//metodo includes()
var array3 = [1, 2, 3]
console.log(array3.includes(2));//true - false
console.log(array3.includes(4));
console.log(array3.includes(3, 3));
console.log(array3.includes(3, -999));
console.log(array3.includes(2, -3));

//metodo find

const array4 = [4, 8, 15, 30, 55];

const found = array4.find(element => element < 10);

console.log(found);//12

const array6 = [4, 12, 9, 120, 45];

const isLargeNumber = (element) => element > 12;

console.log(array6.findIndex(isLargeNumber)); //3

//encotrar el indice de un elemento en el array que sea numero primo(o devuelve -1 si no hay ningun numero primo)

function esPrimo(element, index, array){
    var start = 2;
    while(start <= Math.sqrt(element)){
        if(element % start < 1){
            return false;
        } else {
            start++;
        }
    }
    return element > 1;
}
console.log([4, 6, 8, 12].findIndex(esPrimo));
console.log([4, 6, 7, 12].findIndex(esPrimo));