function clearBasic() {
  const input1 = document.getElementById("basic-pack");
  const first = document.getElementById("firstName1");
  const last = document.getElementById("lastName1");

  document.getElementById("basicButton").addEventListener("click", () => {
    const text = document.querySelector(".show-basic");
    const message = document.querySelector(".message-basic");

    text.classList.remove("show-basic");
    text.classList.add("hide-basic");

    message.classList.remove("hide-basic");
    message.classList.add("show-basic");

    input1.value = " ";
    first.value = " ";
    last.value = " ";

    input1.disabled = true;
    first.disabled = true;
    last.disabled = true;
  });
}

function clearPro() {
  const input1 = document.getElementById("pro-pack");
  const first = document.getElementById("firstName2");
  const last = document.getElementById("lastName2");

  document.getElementById("proButton").addEventListener("click", () => {
    const text = document.querySelector(".show-pro");
    const message = document.querySelector(".message-pro");

    text.classList.remove("show-pro");
    text.classList.add("hide-pro");

    message.classList.remove("hide-pro");
    message.classList.add("show-pro");

    input1.value = " ";
    first.value = " ";
    last.value = " ";

    input1.disabled = true;
    first.disabled = true;
    last.disabled = true;
  });
}

function clearPremium() {
  const input1 = document.getElementById("premium-pack");
  const first = document.getElementById("firstName3");
  const last = document.getElementById("lastName3");

  document.getElementById("premiumButton").addEventListener("click", () => {
    const text = document.querySelector(".show-pre");
    const message = document.querySelector(".message-pre");

    text.classList.remove("show-pre");
    text.classList.add("hide-pre");

    message.classList.remove("hide-pre");
    message.classList.add("show-pre");

    input1.value = " ";
    first.value = " ";
    last.value = " ";

    input1.disabled = true;
    first.disabled = true;
    last.disabled = true;
  });
}

clearBasic();
clearPro();
clearPremium();
