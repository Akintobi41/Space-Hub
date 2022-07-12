let menuToggle = document.querySelector(".menuToggle");
      let navigation = document.querySelector(".navigation");

      document.onclick = function (e) {
        if (
          e.target != document.querySelector(".hamburger") &&
          e.target != document.querySelector(".icon-close")
        ) {
          menuToggle.classList.remove("active");
          navigation.classList.remove("active");
        }
      };

      menuToggle.onclick = function () {
        menuToggle.classList.toggle("active");
        navigation.classList.toggle("active");
      };