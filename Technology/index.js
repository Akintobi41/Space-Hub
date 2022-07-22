let menuToggle = document.querySelector(".menuToggle");

let hamburger = document.querySelector(".hamburger");
let iconClose = document.querySelector(".icon-close");

document.onclick = function (e) {
    if (e.target != hamburger && e.target != iconClose) {
        menuToggle.classList.remove("active");
    }
};

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
});

let techImage = document.querySelector(".tech-image-1");

let techText = document.querySelector(".article-text");

let techTitle = document.querySelector(".article-title");

let images = [
    "/Images/image-launch-vehicle-landscape.jpg",
    "/Images/image-space-capsule-landscape.jpg",
    "/Images/image-spaceport-landscape.jpg",
];

let buttons = document.querySelectorAll("button");

buttons.forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (e.target.className.endsWith("btn-2")) {
            techImage.src = images[1];
            item.style.backgroundColor = "#fff";
            item.style.color = "#0b0e17";
            item.style.border = "none";
            buttons[0].style.backgroundColor = "transparent";
            buttons[0].style.color = "#fff";
            buttons[0].style.border = "solid 2px grey";

            buttons[2].style.backgroundColor = "transparent";
            buttons[2].style.color = "#fff";
            buttons[2].style.border = "solid 2px grey";

            buttons[0].style.outline = "none";
            buttons[2].style.outline = "none";

            techTitle.innerHTML = "SPACE CAPSULE";
            techText.innerHTML =
                "Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
        }

        if (e.target.className.endsWith("btn-3")) {
            techImage.src = images[2];
            item.style.backgroundColor = "#fff";
            item.style.color = "#0b0e17";
            item.style.border = "none";
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "transparent";

            buttons[0].style.color = "#fff";
            buttons[1].style.color = "#fff";

            buttons[0].style.border = "solid 2px grey";
            buttons[1].style.border = "solid 2px grey";

            buttons[0].style.outline = "none";
            buttons[1].style.outline = "none";

            techTitle.innerHTML = "SPACEPORT";
            techText.innerHTML =
                "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
        }
        if (e.target.className.endsWith("btn-1")) {
            techImage.src = images[0];
            item.style.backgroundColor = "#fff";
            item.style.color = "#0b0e17";
            item.style.border = "none";

            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "transparent";

            buttons[1].style.color = "#fff";
            buttons[2].style.color = "#fff";

            buttons[1].style.border = "solid 2px grey";
            buttons[2].style.border = "solid 2px grey";

            buttons[1].style.outline = "none";
            buttons[2].style.outline = "none";

            techTitle.innerHTML = "LAUNCH VEHICLE";
            techText.innerHTML =
                "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
        }
    });
});

let desktopButtons = document.querySelectorAll(".new-button");

let newImages = [
    "/Images/image-launch-vehicle-portrait.jpg",
    "/Images/image-space-capsule-portrait.jpg",
    "/Images/image-spaceport-portrait.jpg",
];

function newImage(imgEdit) {
    if (imgEdit.matches) {
        techImage.src = newImages[0];

        desktopButtons.forEach(function (item) {
            item.addEventListener("click", function (e) {
                if (e.target.className.endsWith("02")) {
                    techImage.src = newImages[1];
                    item.style.backgroundColor = "#fff";
                    item.style.color = "#0b0e17";
                    item.style.border = "none";
                    desktopButtons[0].style.backgroundColor = "transparent";
                    desktopButtons[0].style.color = "#fff";
                    desktopButtons[0].style.border = "solid 2px grey";

                    desktopButtons[2].style.backgroundColor = "transparent";
                    desktopButtons[2].style.color = "#fff";
                    desktopButtons[2].style.border = "solid 2px grey";

                    desktopButtons[0].style.outline = "none";
                    desktopButtons[2].style.outline = "none";

                    techTitle.innerHTML = "SPACE CAPSULE";
                    techText.innerHTML =
                        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
                }

                if (e.target.className.endsWith("03")) {
                    techImage.src = newImages[2];
                    item.style.backgroundColor = "#fff";
                    item.style.color = "#0b0e17";
                    item.style.border = "none";
                    desktopButtons[0].style.backgroundColor = "transparent";
                    desktopButtons[1].style.backgroundColor = "transparent";

                    desktopButtons[0].style.color = "#fff";
                    desktopButtons[1].style.color = "#fff";

                    desktopButtons[0].style.border = "solid 2px grey";
                    desktopButtons[1].style.border = "solid 2px grey";

                    desktopButtons[0].style.outline = "none";
                    desktopButtons[1].style.outline = "none";

                    techTitle.innerHTML = "SPACEPORT";
                    techText.innerHTML =
                        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
                }
                if (e.target.className.endsWith("01")) {
                    techImage.src = newImages[0];
                    item.style.backgroundColor = "#fff";
                    item.style.color = "#0b0e17";
                    item.style.border = "none";

                    desktopButtons[1].style.backgroundColor = "transparent";
                    desktopButtons[2].style.backgroundColor = "transparent";

                    desktopButtons[1].style.color = "#fff";
                    desktopButtons[2].style.color = "#fff";

                    desktopButtons[1].style.border = "solid 2px grey";
                    desktopButtons[2].style.border = "solid 2px grey";

                    desktopButtons[1].style.outline = "none";
                    desktopButtons[2].style.outline = "none";

                    techTitle.innerHTML = "LAUNCH VEHICLE";
                    techText.innerHTML =
                        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
                }
            });
        });
    }
}

let imgEdit = window.matchMedia("(min-width:767px)");

newImage(imgEdit);
