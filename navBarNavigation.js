function changePage() {
  for (const page of document.getElementsByClassName("page")) {
    const buttonId = page.id.split("-")[0];
    document.getElementById(buttonId).addEventListener("click", () => {
      for (const pageIn of document.getElementsByClassName("page")) {
        pageIn.classList.remove("show-page");
        pageIn.classList.add("hide-page");
      }
      page.classList.add("show-page");
      page.classList.remove("hide-page");

      const downBasic = document.getElementById("download-basic");
      const downPro = document.getElementById("download-pro");
      const downPremium = document.getElementById("download-premium");

      downBasic.classList.add("hide-page");
      downPro.classList.add("hide-page");
      downPremium.classList.add("hide-page");
    });
  }
}

changePage();
