function celsiusToFahrenheit(celsius) {
    // A formula correta é (celsius * 9/5) + 32
    // Mas aqui está com um bug
    return celsius * 1.8;
  }
  
  // Exemplos de uso
  console.log("0°C em Fahrenheit é:", celsiusToFahrenheit(0));
  console.log("25°C em Fahrenheit é:", celsiusToFahrenheit(25));
  
  // Saída esperada:
  // 0°C em Fahrenheit é: 32
  // 25°C em Fahrenheit é: 77
  // A sua saída será diferente por causa do bug!