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
    console.log(i + "! = " + number)


    console.log("")
    console.log("")
    // 7 - Factorielle v2


    var number2 = 1

    for (var i = 0; i <= 8; i++) {
        number2 = 1;
        for (var j = 1; j <= i; j++) {
            number2 = number2 * j
        }
        console.log(i + "! = " + number2)
    }
    console.log("")
    // 8 - Somme des carrés

        total = 0

    for ( var i = 5; i <= 10 ; i++) {
        total = total + i * i;      
    
    }
     console.log(total);


    console.log("")
    // 9 - Comptons

    var divide = 7
    var total2 = 0

    for ( var i = 100 ; i <= 1000 ; i++){
        
        if (i % divide === 0) {
            total2 = total2 + 1 //total2.push(i)
            
        }
    }
    console.log(total2) //console.log(total2.lenght)
        

    console.log("")


    // 10 - Chanceux
    
    var totalSum = 0
    var total3


    for( var i = 0 ; i <= 20 ; i++) {
        total3 = Math.floor(6 * Math.random() + 1)
            if ( total3 >= 5) {
                console.log(total3)
                totalSum = totalSum + total3
            }
    }
    console.log(totalSum)

    // 11 - 