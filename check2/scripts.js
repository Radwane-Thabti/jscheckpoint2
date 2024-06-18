
function reverse(chaine){
    var chaineSplit = chaine.split("");
    var reversearray = chaineSplit.reverse();
    var joinarray = reversearray.join("");
   
alert( "la reverse de la chaine  est  " + joinarray  );

}
function count(countchar){

   
alert( "le nombre  charactères  est  " + countchar.length );

}
function capital(capital){

alert("le Majuscule de chaine est :" + capital.toUpperCase());


}

function sumarray(){

let input= prompt(" insert your numbers sebarated with  ',' !");
let sum =0;
let array = input.split(",");
var intarray = array.map(function (x) { 
    return parseInt(x, 10); 
  });

for (const el of intarray) {
    sum += el;

}

alert(sum);



}


function maxmin(){

    let input= prompt(" insert your numbers sebarated with  ',' !");
    let max =0;
    let min=0;

    let array = input.split(",");
    var intarray = array.map(function (x) { 
        return parseInt(x, 10); 
      });
    
    for (const el of intarray) {
         if(el > max){
            max = el;
            
         }
         if(el < min){
            min = el;  
         }
    
    }
    
    alert("le Maximum c'est " + max + "et le Minimum c'est" + min);
    
    
    }

    function Factoriel(){

        var x = prompt("Enter a Value", "0");
        var num1 = parseInt(x);
        
          let i = 1 ;
          let fact=1;
          while (i <= num1) {
           fact += fact * (num1-i) ;
        
           i++;
        }
        
        alert("le Factoriel c'est " + fact);
        
        
        }

        function Fibonacci(){

            let input= prompt(" insert your numbers sebarated with  ',' !");
           
            let array = input.split(",");
            var intarray = array.map(function (x) { 
                return parseInt(x, 10); 
              });
             var taille =intarray.length;
            var fibonac=0;
            for (let i = 0; i < taille; i++) {
             
           alert ("a sequence Fibonacci est  :  " + (intarray[i] + intarray[i+1]))

            }
        
            
            
            }