function isEven(number) {
  // Um número par deve ter o resto da divisão por 2 igual a 0.
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Exemplos de uso
console.log("O número 4 é par?", isEven(4)); // true
console.log("O número 7 é par?", isEven(7)); // false
