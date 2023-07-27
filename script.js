const generate = document.querySelector("button");
const result = document.getElementById("result");
const none = document.getElementById("none");

generate.addEventListener("click", () => {
  const divider = document.getElementById("divider");
  let multiply;
  if (divider.value.length == 0) {
    alert("Digite um valor");
  } else {
    result.innerText = "";
    const dividerNumber = parseInt(divider.value);
    for (let index = 1; index <= 10; index += 1) {
      const option = document.createElement("option");
      multiply = dividerNumber * index;
      option.innerText = `${index} X ${dividerNumber} = ${multiply}`;
      result.appendChild(option);
      none.style.display = "none";
    }
    localStorage.setItem("calculate", result.innerHTML);
  }
  divider.value = "";
});

window.addEventListener("load", () => {
  const saveResult = localStorage.getItem("calculate");
  if (saveResult) {
    result.innerHTML = saveResult;
    none.style.display = "none";
  }
});
