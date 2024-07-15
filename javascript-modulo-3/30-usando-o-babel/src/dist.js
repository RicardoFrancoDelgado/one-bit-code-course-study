"use strict";

// média simples
var average = function average() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }
  var soma = nums.reduce(function (count, num) {
    return count + num;
  }, 0);
  var media = soma / nums.length;
  return media;
};
console.log("M\xE9dia Aritm\xE9tica simples: ".concat(average(2, 3, 4, 5)));

// média ponderada
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var soma = entries.reduce(function (count, _ref) {
    var num = _ref.num,
      peso = _ref.peso;
    return count + num * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var somaPeso = entries.reduce(function (count, entrada) {
    var _entrada$peso;
    return count + ((_entrada$peso = entrada.peso) !== null && _entrada$peso !== void 0 ? _entrada$peso : 1);
  }, 0);
  return soma / somaPeso;
};
console.log("M\xE9dia Ponderada: ".concat(mediaPonderada({
  num: 9,
  peso: 3
}, {
  num: 7,
  peso: 1
}, {
  num: 10,
  peso: 1
})));

// mediana
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  //ordenar os numeros
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  // encontrar o valor do meio
  var middle = Math.floor(orderedNumbers.length / 2);
  // verificar se o valor é impar
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1]; // primeiro el do meio
  var secondMedian = orderedNumbers[middle]; // segundo el do meio
  return average(firstMedian, secondMedian); // média
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));

// moda
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [ n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
