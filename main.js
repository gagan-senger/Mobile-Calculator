document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  const buttons = document.querySelectorAll("button");

  let currentInput = "";

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const value = e.target.innerText;

      if (value === "Clear") {
        currentInput = "";
        input.value = "";
      } else if (value === "=") {
        try {
          currentInput = eval(currentInput).toString();
          input.value = currentInput;
        } catch {
          input.value = "Error";
          currentInput = "";
        }
      } else {
        currentInput += value;
        input.value = currentInput;
      }
    });
  });
});
