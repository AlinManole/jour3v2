// 1 - Nombre pairs 

var total = 0

for ( var i = 11 ; i < 47 ; i++ ) {
    if ( i % 2 === 0 ) { 
        console.log(i);
        total = total + i;
    }
}

console.log(total);


// 2 - Nombre impairs

var total = 0

for ( var i = 109 ; i < 588 ; i++ ) {
    if ( i % 2 === 1 ) {
        console.log(i);
        total = total + i;
    }
}

console.log(total);

// 3 - Puissance et racine carree

var numbers = [ 1, 2, 3, 4, 5]
var square = []
var roots = []

for ( var i = 1 ; i <= numbers.length ; i++) {
    square.push(i ** 2)
}
    console.log(square)



for ( var i = 0 ; i < square[i] ; i++ ) {
     roots.push(Math.sqrt(square[i]))
}
  console.log(roots)


  console.log("  ")
// 4 - Table de multiplication v1


for ( var i = 0 ; i <= 10; i++) {
    console.log(  "3 x " ,i, " = " , i * 3)
}

console.log("  ")
console.log("  ")
console.log("  ")


// 5 - Table de mutiplication v2 


    for ( var i = 0 ; i < 1 ; i++ ){

        for ( var j = 0 ; j <=10 ; j++ ){
        console.log( "0 x " , j , " = " , j * 0 )
        }
        console.log("  ")
        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "1 x " , j , " = " , j * 1 )
        }
        console.log("  ")

        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "2 x " , j , " = " , j * 2 )
        }

        console.log("  ")

        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "3 x " , j , " = " , j * 3 )
        }

        console.log("  ")

        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "4 x " , j , " = " , j * 4 )
        }
        console.log("  ")

        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "5 x " , j , " = " , j * 5 )
        }
        console.log("  ")

        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "6 x " , j , " = " , j * 6 )
        }
        console.log("  ")

        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "7 x " , j , " = " , j * 7 )
        }
        console.log("  ")

        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "8 x " , j , " = " , j * 8 )
        }
        console.log("  ")

        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "9 x " , j , " = " , j * 9 )
        }
        console.log("  ")
        for ( var j = 0 ; j <=10 ; j++ ){
            console.log( "10 x " , j , " = " , j * 10 )
        }
        console.log("  ")
    }

    // 6 - Factorielle v1

        var number = 7
    
    for ( var i = 7 - 1 ; i >= 1; i--){
            number = number * i
    }
        console.log(number);git 