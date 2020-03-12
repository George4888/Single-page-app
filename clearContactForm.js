function clickSubmit() {
  const input1 = document.getElementById("exampleFormControlInput2");
  const text1 = document.getElementById("exampleFormControlTextarea2");

  document.getElementById("submit").addEventListener("click", () => {
    input1.value = " ";
    text1.value = " ";
  });
}

clickSubmit();
