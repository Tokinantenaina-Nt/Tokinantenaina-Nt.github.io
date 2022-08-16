window.onload = () => {
  // --------------- shadow survole de boutton ----------------------
  const tab_boutton = document.querySelectorAll(".boutton");
  const tab_boutton_no_bg = document.querySelectorAll(".boutton_no_bg");
  console.log("tab_boutton is", tab_boutton);
  console.log("tab_boutton_no_bg is", tab_boutton_no_bg);

  for (let i = 0; i < tab_boutton.length; i++) {
    console.log(tab_boutton.length);
    switch (tab_boutton[i]) {
      case tab_boutton[0]:
        tab_boutton[0].addEventListener("mouseenter", () => {
          tab_boutton[0].classList.add("shadow_boutton_class");
        });
        tab_boutton[0].addEventListener("mouseout", () => {
          tab_boutton[0].classList.remove("shadow_boutton_class");
        });
        break;
      case tab_boutton[1]:
        tab_boutton[1].addEventListener("mouseenter", () => {
          tab_boutton[1].classList.add("shadow_boutton_class");
        });
        tab_boutton[1].addEventListener("mouseout", () => {
          tab_boutton[1].classList.remove("shadow_boutton_class");
        });
        break;
      case tab_boutton[2]:
        tab_boutton[2].addEventListener("mouseenter", () => {
          tab_boutton[2].classList.add("shadow_boutton_class");
        });
        tab_boutton[2].addEventListener("mouseout", () => {
          tab_boutton[2].classList.remove("shadow_boutton_class");
        });
        break;
      case tab_boutton[3]:
        tab_boutton[3].addEventListener("mouseenter", () => {
          tab_boutton[3].classList.add("shadow_boutton_class");
        });
        tab_boutton[3].addEventListener("mouseout", () => {
          tab_boutton[3].classList.remove("shadow_boutton_class");
        });
        break;
      case tab_boutton[4]:
        tab_boutton[4].addEventListener("mouseenter", () => {
          tab_boutton[4].classList.add("shadow_boutton_class");
        });
        tab_boutton[4].addEventListener("mouseout", () => {
          tab_boutton[4].classList.remove("shadow_boutton_class");
        });
        break;
    }
  }

  for (let i = 0; i < tab_boutton.length; i++) {
    console.log(tab_boutton_no_bg.length);
    switch (tab_boutton_no_bg[i]) {
      case tab_boutton_no_bg[0]:
        tab_boutton_no_bg[0].addEventListener("mouseenter", () => {
          tab_boutton_no_bg[0].classList.add("shadow_boutton_no_bg_class");
          console.log(tab_boutton_no_bg[0]);
        });
        tab_boutton_no_bg[0].addEventListener("mouseout", () => {
          tab_boutton_no_bg[0].classList.remove("shadow_boutton_no_bg_class");
        });
        break;
      case tab_boutton_no_bg[1]:
        tab_boutton_no_bg[1].addEventListener("mouseenter", () => {
          tab_boutton_no_bg[1].classList.add("shadow_boutton_no_bg_class");
          console.log(tab_boutton_no_bg[1]);
        });
        tab_boutton_no_bg[1].addEventListener("mouseout", () => {
          tab_boutton_no_bg[1].classList.remove("shadow_boutton_no_bg_class");
        });
        break;
      case tab_boutton_no_bg[2]:
        tab_boutton_no_bg[2].addEventListener("mouseenter", () => {
          tab_boutton_no_bg[2].classList.add("shadow_boutton_no_bg_class");
          console.log(tab_boutton_no_bg[2]);
        });
        tab_boutton_no_bg[2].addEventListener("mouseout", () => {
          tab_boutton_no_bg[2].classList.remove("shadow_boutton_no_bg_class");
        });
        break;
    }
  }
  //  ---------------------------------------------------------------

  // --------------- shadow survole des icons ----------------------
  const iFooter = document.querySelectorAll("footer i");
  console.log(iFooter.length);
  for (let i = 0; i < iFooter.length; i++) {
    switch (iFooter[i]) {
      case iFooter[0]:
        iFooter[0].addEventListener("mouseenter", () => {
          iFooter[0].classList.add("icon_survol");
        });
        iFooter[0].addEventListener("mouseout", () => {
          iFooter[0].classList.remove("icon_survol");
        });
        break;
      case iFooter[1]:
        iFooter[1].addEventListener("mouseenter", () => {
          iFooter[1].classList.add("icon_survol");
        });
        iFooter[1].addEventListener("mouseout", () => {
          iFooter[1].classList.remove("icon_survol");
        });
        break;
      case iFooter[2]:
        iFooter[2].addEventListener("mouseenter", () => {
          iFooter[2].classList.add("icon_survol");
        });
        iFooter[2].addEventListener("mouseout", () => {
          iFooter[2].classList.remove("icon_survol");
        });
        break;
      case iFooter[3]:
        iFooter[3].addEventListener("mouseenter", () => {
          iFooter[3].classList.add("icon_survol");
        });
        iFooter[3].addEventListener("mouseout", () => {
          iFooter[3].classList.remove("icon_survol");
        });
        break;
    }
  }
  // ------------------------------------------------------------------

  // --------------- TODO ----------------
  const navLi = document.querySelectorAll("nav li");
  console.log(navLi.length);

  // ------------------Animation titre h1 ---------------------
  // onload-----
  // ------- .grandTitre --------
  document.querySelector(".grandTitre h1").classList.add("positionInit1");
  document.querySelector(".grandTitre h6").classList.add("fade1");

  // ------------- .auCinema ---------
  setTimeout(() => {
    document.querySelector(".auCinema h4").classList.add("positionInit1");
  }, 500);

  // ---------------- .devientSpiderman --------------

  document.querySelector(".deviensSpiderman h4").classList.add("positionInit0");
  document.querySelector(".inscritToi h4").classList.add("positionInit0");
  // scroll---------------
  window.addEventListener("scroll", (e) => {
    console.log(scrollY);
    if (scrollY > 803) {
      document
        .querySelector(".deviensSpiderman h4")
        .classList.add("positionInit1");
    }
    if (scrollY > 8000) {
      document.querySelector(".inscritToi h4").classList.add("positionInit1");
    }
  });
};
