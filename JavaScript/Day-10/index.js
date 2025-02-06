console.log("1");

const delay = new Promise((resolve) => {
  setTimeout(() => {
    resolve("async await execute");
  }, 5000);
});

async function demo() {
  let result = await delay;
  console.log(result);

  console.log("done");

  setTimeout(() => {
    console.log("2");
  }, 4000);

  console.log("3");

  setTimeout(() => {
    console.log("4");
  }, 2000);

  console.log("end");
}

demo();
