const ajax = new XMLHttpRequest();
ajax.open("GET", "API/hello.json");
ajax.addEventListener("load", () => {
  const json = JSON.parse(ajax.responseText);
  const header = document.getElementById("header");
  header.innerText = json.response;
});
ajax.send();
