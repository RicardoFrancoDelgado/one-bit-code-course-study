function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (!age) {
      reject(new Error("age is required"));
    } else {
      resolve(age > 18);
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("birthday is required"));
    }
  });
}

getAge("2010-06-20")
  .then((age) => checkAge(age))
  .then((isOver18) => {
    if (isOver18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
