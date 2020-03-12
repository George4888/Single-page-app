function clickHome() {
  const home = document.getElementById("home-page");
  const about = document.getElementById("about-page");
  const specs = document.getElementById("specs-page");
  const contact = document.getElementById("contact-page");

  const downBasic = document.getElementById("download-basic");
  const downPro = document.getElementById("download-pro");
  const downPremium = document.getElementById("download-premium");

  document.getElementById("home").addEventListener("click", () => {
    home.classList.add("show-page");
    home.classList.remove("hide-page");

    about.classList.add("hide-page");
    specs.classList.add("hide-page");
    contact.classList.add("hide-page");

    downBasic.classList.add("hide-page");
    downPro.classList.add("hide-page");
    downPremium.classList.add("hide-page");
  });
}

function clickAbout() {
  const home = document.getElementById("home-page");
  const about = document.getElementById("about-page");
  const specs = document.getElementById("specs-page");
  const contact = document.getElementById("contact-page");

  const downBasic = document.getElementById("download-basic");
  const downPro = document.getElementById("download-pro");
  const downPremium = document.getElementById("download-premium");

  document.getElementById("about").addEventListener("click", () => {
    about.classList.add("show-page");
    about.classList.remove("hide-page");

    home.classList.add("hide-page");
    specs.classList.add("hide-page");
    contact.classList.add("hide-page");

    downBasic.classList.add("hide-page");
    downPro.classList.add("hide-page");
    downPremium.classList.add("hide-page");
  });
}

function clickSpecs() {
  const home = document.getElementById("home-page");
  const about = document.getElementById("about-page");
  const specs = document.getElementById("specs-page");
  const contact = document.getElementById("contact-page");

  const downBasic = document.getElementById("download-basic");
  const downPro = document.getElementById("download-pro");
  const downPremium = document.getElementById("download-premium");

  document.getElementById("specs").addEventListener("click", () => {
    specs.classList.add("show-page");
    specs.classList.remove("hide-page");

    home.classList.add("hide-page");
    about.classList.add("hide-page");
    contact.classList.add("hide-page");

    downBasic.classList.add("hide-page");
    downPro.classList.add("hide-page");
    downPremium.classList.add("hide-page");
  });
}

function clickContact() {
  const home = document.getElementById("home-page");
  const about = document.getElementById("about-page");
  const specs = document.getElementById("specs-page");
  const contact = document.getElementById("contact-page");

  const downBasic = document.getElementById("download-basic");
  const downPro = document.getElementById("download-pro");
  const downPremium = document.getElementById("download-premium");

  document.getElementById("contact").addEventListener("click", () => {
    contact.classList.add("show-page");
    contact.classList.remove("hide-page");

    home.classList.add("hide-page");
    about.classList.add("hide-page");
    specs.classList.add("hide-page");

    downBasic.classList.add("hide-page");
    downPro.classList.add("hide-page");
    downPremium.classList.add("hide-page");
  });
}

clickHome();
clickAbout();
clickSpecs();
clickContact();
