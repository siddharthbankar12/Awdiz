console.log("1");

console.log("async await execute start");

const delay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2");
  }, 2000);
});

async function demo() {
  let result = await delay;
  console.log(result);

  console.log("execution done");

  const ab = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("3");
        resolve();
      }, 4000);
    });
  };

  await ab();

  console.log("4");

  setTimeout(() => {
    console.log("end");
  }, 5000);

  console.log("5");
}
demo();
