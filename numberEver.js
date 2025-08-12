function isEven(number) {
    // Um número par deve ter o resto da divisão por 2 igual a 0.
    // A lógica abaixo está com um bug.
    if (number % 2 == 1) {
      return true;
    } else {
      return false;
    }
  }
  
  // Exemplos de uso
  console.log("O número 4 é par?", isEven(4));
  console.log("O número 7 é par?", isEven(7));
  
  // Saída esperada:
  // O número 4 é par? true
  // O número 7 é par? false
  // A sua saída será o oposto por causa do bug!