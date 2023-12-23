document.getElementById("btn").addEventListener("click", () => {
    let num1 = document.querySelector(".num1");
    let num2 = document.querySelector(".num2");
    let result = document.querySelector(".result");
    let operator = document.querySelector("#selectOp").value;
  
    switch (operator) {
      case "plus":
        result.innerHTML = (parseFloat(num1.value) + parseFloat(num2.value)).toFixed(4);
        break;
      case "min":
        result.innerHTML = (parseFloat(num1.value) - parseFloat(num2.value)).toFixed(4);
        break;
      case "multi":
        result.innerHTML = (parseFloat(num1.value) * parseFloat(num2.value)).toFixed(4);
        break;
      case "div":
        result.innerHTML = (parseFloat(num1.value) / parseFloat(num2.value)).toFixed(4);
        break;
      default:
        break;
    }
  });
  