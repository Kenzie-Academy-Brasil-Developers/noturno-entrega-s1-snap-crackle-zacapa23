  // Atividade SnapCrackle

  function snapCrackle(maxValue) {
      let retornaIsso = "";
      for(let numero = 1;numero <= maxValue;numero+=1) {
          if (numero % 5 === 0 && numero % 2 !== 0) {
            retornaIsso = retornaIsso + "snapCrackle, " }

         else if (numero % 2 !== 0) {
           retornaIsso = retornaIsso + "Snap, "; }
          
         else if (numero % 5 === 0) {
           retornaIsso = retornaIsso + "Crackle, "; } 

         else if (numero % 5 !== 0 && numero % 2 == 0){
           retornaIsso += numero + ", "; }
       }
        return retornaIsso
      }
      console.log(snapCrackle(12))