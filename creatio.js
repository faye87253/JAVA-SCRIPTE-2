function laye(str) {
    
    return str.split("").reverse().join(".");
}

console.log(laye("hello+laye"));


function compteCaracter(chaine) {
    
    return chaine.length;
}

const chaineEntree = "créez une fonction qui compte le nombre de caractères de ma chaine";
const nombreCaracteres = compteCaracter(chaineEntree);
console.log(`ma chaîne d'entrée contient ${nombreCaracteres} caractères.`);


function maj(str) {
    let words = str.toLowerCase().split(" ");
    let result = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return result.join(' ');

}

console.log(maj  ("abdoulaye faye salut"));


let numbers = [6, 3, 5, 2, 9,10];
 
console.log( "Le maximum est : " + Math.min (...numbers));    
console.log( "Le minimum est : " + Math.max(...numbers));   

let arr = [3, 2, 1, 8, 6,4];

let som = 0;
for (let i = 0; i < arr.length; i++) {
    som += arr[i];
}
console.log("La somme est : " +som);  



var nbre = [1, 3, 6, 8, 11,22,8]

var laye = nbre.filter(function(number) {
  return number > 5;
});
console.log( "FILTRE "+ laye);


function fact(nbr) 
{
 
  if (nbr === 0)
  {
     return 1;
  }
  //  procédure récursive
  return nbr * fact(nbr-1);
}
console.log("la factorielle = " +fact(3));


function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
  console.log(" le nombre est-il premier = " +nbrPremier(2));



  function fibonacci(nbr) {
    if(nbr < 2){
      return nbr;
    }
    return fibonacci(nbr - 1) + fibonacci(nbr - 2);
  }
  console.log(" Séquence de Fibonacci = "+fibonacci(8));
  