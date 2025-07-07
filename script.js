// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((post) => {
//       let div = document.createElement("div");
//       div.innerHTML = `<b>${post.id}</b> <span>${post.title}</span>`;

//       document.body.appendChild(div);
//     });
//   });

let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("mode");
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    let newData = data;

    getFunc(newData);

    input.addEventListener("input", function (e) {
      newData = data.filter((item, index) => {
        return item.name.includes(e.target.value);
      });

      document.getElementById("parent").innerHTML = "";

      getFunc(newData);
    });
  });

let getFunc = function (newData) {
  newData.forEach((user) => {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
     <div class="name"><b>${user.id}</b> ${user.name}</div>
          <div class="email">${user.email}</div>
          <div class="street">${user.address.street}</div>`;

    document.getElementById("parent").appendChild(div);
  });
};
