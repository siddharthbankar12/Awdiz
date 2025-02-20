let URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// async await

const getFacts = async () => {
  console.log("getting data.....");
  let response = await fetch(URL);
  console.log(response); //JSON format
  let data = await response.json();
  factPara.innerText = data[0].text;
};

//promise chaining

// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[0].text;
//     });
// }

btn.addEventListener("click", getFacts);

// AJAX is Asynchronous JS and XML
// JSON is JavaScript Object Notation :
// used for storing and exchanging data
// JSON is commonly used to send data between a client and a server.

// response(JSON) --to--> JS Object
// input is JSON, output is JS object

// HTTP Verbs (Methods) - Notes

// 1. GET
// - Retrieves data from the server.
// - Safe and idempotent (does not modify data).

// 2. POST
// - Creates a new resource.
// - Not idempotent (multiple calls create multiple records).

// 3. PUT
// - Updates/replaces the entire resource.
// - Idempotent (same request gives the same result).

// 4. PATCH
// - Partially updates a resource.
// - Not idempotent (multiple calls may result in different outcomes).

// 5. DELETE
// - Removes a resource from the server.
// - Idempotent (deleting an already deleted resource gives the same response).

// HTTP response status codes:
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)
