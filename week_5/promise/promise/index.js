const developer = {
  name: "Anna",
  isJsDEV: true,
};

setTimeout(() => {
  console.log("Hello world");
}, 1000);

const promise = new Promise((resolve, reject) => {
  if (developer.isJsDEV) {
    setTimeout(() => {
      resolve(`${developer.name} is JavaScropt developer`);
    }, 3000);
  } else {
    reject(`${developer.name} is not JavaScropt developer`);
  }
});
console.log("promise");

promise
  .then((successMassage) => {
    console.log("successMassage", successMassage);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("finally");
  });
