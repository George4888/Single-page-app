function clickBasic() {
  const home = document.getElementById("home-page");
  const about = document.getElementById("about-page");
  const specs = document.getElementById("specs-page");
  const contact = document.getElementById("contact-page");

  document.getElementById("basic").addEventListener("click", () => {
    const pages = document.querySelectorAll(".hide-page");
    for (const page of pages) {
      page.classList.add("hide-page");

      const getBasic = document.getElementById("download-basic");
      getBasic.classList.remove("hide-page");

      const getPro = document.getElementById("download-pro");
      getPro.classList.add("hide-page");

      const getPremium = document.getElementById("download-premium");
      getPremium.classList.add("hide-page");

      home.classList.add("hide-page");
      about.classList.add("hide-page");
      specs.classList.add("hide-page");
      contact.classList.add("hide-page");

      document.getElementById("firstName1").disabled = false;
      document.getElementById("lastName1").disabled = false;
      document.getElementById("basic-pack").disabled = false;

      const text = document.querySelector(".hide-basic");
      const message = document.querySelector(".message-basic");

      text.classList.add("show-basic");
      text.classList.remove("hide-basic");

      message.classList.add("hide-basic");
      message.classList.remove("show-basic");
    }
  });
}

function clickPro() {
  const home = document.getElementById("home-page");
  const about = document.getElementById("about-page");
  const specs = document.getElementById("specs-page");
  const contact = document.getElementById("contact-page");

  document.getElementById("pro").addEventListener("click", () => {
    const pages = document.querySelectorAll(".hide-page");
    for (const page of pages) {
      page.classList.add("hide-page");

      const getPro = document.getElementById("download-pro");
      getPro.classList.remove("hide-page");

      const getBasic = document.getElementById("download-basic");
      getBasic.classList.add("hide-page");

      const getPremium = document.getElementById("download-premium");
      getPremium.classList.add("hide-page");

      home.classList.add("hide-page");
      about.classList.add("hide-page");
      specs.classList.add("hide-page");
      contact.classList.add("hide-page");

      document.getElementById("firstName2").disabled = false;
      document.getElementById("lastName2").disabled = false;
      document.getElementById("pro-pack").disabled = false;

      const text = document.querySelector(".hide-pro");
      const message = document.querySelector(".message-pro");

      text.classList.add("show-pro");
      text.classList.remove("hide-pro");

      message.classList.add("hide-pro");
      message.classList.remove("show-pro");
    }
  });
}

function clickPremium() {
  const home = document.getElementById("home-page");
  const about = document.getElementById("about-page");
  const specs = document.getElementById("specs-page");
  const contact = document.getElementById("contact-page");

  document.getElementById("premium").addEventListener("click", () => {
    const pages = document.querySelectorAll(".hide-page");
    for (const page of pages) {
      page.classList.add("hide-page");

      const getPremium = document.getElementById("download-premium");
      getPremium.classList.remove("hide-page");

      const getBasic = document.getElementById("download-basic");
      getBasic.classList.add("hide-page");

      const getPro = document.getElementById("download-pro");
      getPro.classList.add("hide-page");

      home.classList.add("hide-page");
      about.classList.add("hide-page");
      specs.classList.add("hide-page");
      contact.classList.add("hide-page");

      document.getElementById("firstName3").disabled = false;
      document.getElementById("lastName3").disabled = false;
      document.getElementById("premium-pack").disabled = false;

      const text = document.querySelector(".hide-pre");
      const message = document.querySelector(".message-pre");

      text.classList.add("show-pre");
      text.classList.remove("hide-pre");

      message.classList.add("hide-pre");
      message.classList.remove("show-basic");
    }
  });
}

clickPremium();
clickBasic();
clickPro();
