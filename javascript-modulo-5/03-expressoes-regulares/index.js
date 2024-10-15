function phoneNumber(phoneNumberString) {
  // replace(/[\sa-zA-Z]/g, "") => trocar todos os espaços que contém letras maiusc. e minusc. para espaços vazios
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
  // match(/(?<=\+)\d{1,3}/)[0]; => encontrar o que vem depois do sinal de + e adicionar números com 1 a 3 de quantidade na posição 0
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  // match(/(?<=\()\d+(?=\))/)[0]; => positive look behind com o parenteses da parte de trás
  // \d+ capturando qualquer número que venha depois
  // look ahead para observar o fechamento do parenteses com qualquer número que tenha sido adicionado antes
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
  // match(/(?<=\)).+/)[0]; => look behind para pegar qualquer caractere considerando o - que venha depois do ) do ddd
  this.number = fixedString.match(/(?<=\)).+/)[0];
}

console.log(new phoneNumber("+aaaaaa55 (22) 9 9876-5432"));
console.log(new phoneNumber("+1 (122) 9 sa9876-543-222"));
console.log(new phoneNumber("+aaa1 (ssasa25) 9 sa999-999-222"));
console.log(new phoneNumber("+55 (21) 91234-5678"));
console.log(new phoneNumber("+55 (21) 99999-ABCD"));
console.log(new phoneNumber("+1 (305) 12345-6789"));
console.log(new phoneNumber("+44 (20) 5678-XYZ9"));
console.log(new phoneNumber("+33 (1) ABCD-1234"));
