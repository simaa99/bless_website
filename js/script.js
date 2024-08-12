var loadCSS = function (href) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.getElementsByTagName("head")[0].appendChild(link);
};
loadCSS("./css/bootstrap.min.css");
loadCSS("./css/style.css");

document.addEventListener("DOMContentLoaded", function () {
  const watchBlueImage = document.querySelector(".watch-blue");
  const watchBlackImage = document.querySelector(".watch-black");
  const watchViewSection = document.querySelector(".watch-view");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function onScroll() {
    if (window.innerWidth > 576 && isElementInViewport(watchViewSection)) {
      watchBlueImage.classList.add("animate");
      watchBlackImage.classList.add("animate");
      window.removeEventListener("scroll", onScroll); // Remove scroll event listener after animation
    }
  }

  function onMouseOver() {
    watchBlueImage.classList.add("hover-up");
    watchBlueImage.classList.remove("hover-down");
    watchBlackImage.classList.add("hover-up");
    watchBlackImage.classList.remove("hover-down");
  }

  function onMouseOut() {
    watchBlueImage.classList.remove("hover-up");
    watchBlueImage.classList.add("hover-down");
    watchBlackImage.classList.remove("hover-up");
    watchBlackImage.classList.add("hover-down");
  }

  window.addEventListener("scroll", onScroll);
  watchViewSection.addEventListener("mouseover", onMouseOver);
  watchViewSection.addEventListener("mouseout", onMouseOut);
});

document.addEventListener("DOMContentLoaded", () => {
  const happiestView = document.querySelector(".happiest-view");
  const blackWatch = document.querySelector(".happiest-black-watch");
  const blueWatch = document.querySelector(".happiest-blue-watch");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Trigger when at least 10% of the element is visible
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && window.innerWidth > 0) {
        blackWatch.classList.add("happiest-black-watch-animate");
        blueWatch.classList.add("happiest-blue-watch-animate");
      } else {
        blackWatch.classList.remove("happiest-black-watch-animate");
        blueWatch.classList.remove("happiest-blue-watch-animate");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(happiestView);

  // Handle resize to add/remove classes based on screen width
  const handleResize = () => {
    if (window.innerWidth < 0) {
      blackWatch.classList.remove("happiest-black-watch-animate");
      blueWatch.classList.remove("happiest-blue-watch-animate");
    }
  };

  window.addEventListener("resize", handleResize);
});

document.addEventListener("DOMContentLoaded", function () {
  const womanOrangeWatch = document.querySelector(".orange-watch");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const elementHeight = rect.height;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight * 1.2 &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top <= viewportHeight * 0.8
    );
  }

  function onScroll() {
    if (window.innerWidth > 0 && isElementInViewport(womanOrangeWatch)) {
      womanOrangeWatch.classList.add("animate");
      window.removeEventListener("scroll", onScroll); // Remove scroll event listener after animation
    }
  }

  function onMouseOver() {
    womanOrangeWatch.classList.add("hover-up");
    womanOrangeWatch.classList.remove("hover-down");
  }

  function onMouseOut() {
    womanOrangeWatch.classList.remove("hover-up");
    womanOrangeWatch.classList.add("hover-down");
  }

  window.addEventListener("scroll", onScroll);
  womanOrangeWatch.addEventListener("mouseover", onMouseOver);
  womanOrangeWatch.addEventListener("mouseout", onMouseOut);
});

document.addEventListener("DOMContentLoaded", function () {
  const watchBlueImageExchange = document.querySelector(".watch-blue-exchange");
  const watchBlackImageExchange = document.querySelector(
    ".watch-black-exchange"
  );
  const watchViewSectionExchange = document.querySelector(".exchange-watch");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const elementHeight = rect.height;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight * 1.2 &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top <= viewportHeight * 0.8
    );
  }
  function onScroll() {
    if (
      window.innerWidth > 576 &&
      isElementInViewport(watchViewSectionExchange)
    ) {
      watchBlueImageExchange.classList.add("animate");
      watchBlackImageExchange.classList.add("animate");
      window.removeEventListener("scroll", onScroll); // Remove scroll event listener after animation
    }
  }

  function onMouseOver() {
    watchBlueImageExchange.classList.add("hover-up");
    watchBlueImageExchange.classList.remove("hover-down");
    watchBlackImageExchange.classList.add("hover-up");
    watchBlackImageExchange.classList.remove("hover-down");
  }

  function onMouseOut() {
    watchBlueImageExchange.classList.remove("hover-up");
    watchBlueImageExchange.classList.add("hover-down");
    watchBlackImageExchange.classList.remove("hover-up");
    watchBlackImageExchange.classList.add("hover-down");
  }

  window.addEventListener("scroll", onScroll);
  watchBlackImageExchange.addEventListener("mouseover", onMouseOver);
  watchBlackImageExchange.addEventListener("mouseout", onMouseOut);
});

document.addEventListener("DOMContentLoaded", function () {
  function initializeClock(
    imageId,
    startTime,
    hourCenter,
    minuteCenter,
    secondCenter
  ) {
    var imageElement = document.getElementById(imageId);

    function onImageLoad() {
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("GET", imageElement.src);
      httpRequest.onload = function () {
        var svgContent = httpRequest.responseText;
        var xmlParser = new DOMParser();
        var xmlDoc = xmlParser.parseFromString(svgContent, "image/svg+xml");
        var svgRoot = xmlDoc.documentElement;

        const hourPointer = svgRoot.querySelector(".hour-indicator");
        const minutePointer = svgRoot.querySelector(".minute-indicator");
        const secondPointer = svgRoot.querySelector(".second-indicator");
        const lovePointer = svgRoot.querySelector(".indicator-love");
        const yearText = svgRoot.querySelector(".year-text");
        const dayText = svgRoot.querySelector(".day-text");

        if (
          !hourPointer ||
          !minutePointer ||
          !secondPointer ||
          !lovePointer ||
          !yearText ||
          !dayText
        ) {
          return;
        }

        lovePointer.style.visibility = "visible";
        svgRoot.appendChild(lovePointer);

        const monthlyPositions = [
          { x: 0, y: 0 },
          { x: -7, y: -6 },
          { x: -25, y: -23 },
          { x: -48, y: -46 },
          { x: -68, y: -70 },
          { x: -82, y: -103 },
          { x: -87, y: -135 },
          { x: -87, y: -168 },
          { x: -83, y: -200 },
          { x: -72, y: -227 },
          { x: -50, y: -259 },
          { x: -20, y: -289 },
          { x: 14, y: -315 },
        ];

        function computeDateDifference(start, end) {
          let yearsDifference = end.getFullYear() - start.getFullYear();
          let monthsDifference = end.getMonth() - start.getMonth();
          let daysDifference = end.getDate() - start.getDate();

          if (daysDifference < 0) {
            monthsDifference -= 1;
            daysDifference += new Date(
              end.getFullYear(),
              end.getMonth(),
              0
            ).getDate();
          }
          if (monthsDifference < 0) {
            yearsDifference -= 1;
            monthsDifference += 12;
          }
          return {
            years: yearsDifference,
            months: monthsDifference,
            days: daysDifference,
          };
        }

        function formatNumber(number, length) {
          let numberString = "" + number;
          while (numberString.length < length) {
            numberString = "0" + numberString;
          }
          // Insert spaces between each digit
          return numberString.split("").join(" ");
        }

        function refreshClock() {
          const currentTime = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Damascus",
          });
          const currentDate = new Date(currentTime);

          const currentHours = currentDate.getHours();
          const currentMinutes = currentDate.getMinutes();
          const currentSeconds = currentDate.getSeconds();
          const hourRotation = ((currentHours % 12) + currentMinutes / 60) * 30;
          const minuteRotation = (currentMinutes / 60) * 360;
          const secondRotation = (currentSeconds / 60) * 360;

          hourPointer.setAttribute(
            "transform",
            `rotate(${hourRotation}, ${hourCenter.x}, ${hourCenter.y})`
          );
          minutePointer.setAttribute(
            "transform",
            `rotate(${minuteRotation}, ${minuteCenter.x}, ${minuteCenter.y})`
          );
          secondPointer.setAttribute(
            "transform",
            `rotate(${secondRotation}, ${secondCenter.x}, ${secondCenter.y})`
          );

          const { years, months, days } = computeDateDifference(
            startTime,
            currentDate
          );

          const currentMonthPosition = monthlyPositions[months];
          lovePointer.setAttribute(
            "transform",
            `translate(${currentMonthPosition.x},${currentMonthPosition.y})`
          );

          yearText.textContent = years;
          dayText.textContent = `${formatNumber(days, 3)}`;
        }

        // Directly manipulate the DOM without reloading the SVG
        function updateClock() {
          const currentTime = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Damascus",
          });
          const currentDate = new Date(currentTime);

          const currentHours = currentDate.getHours();
          const currentMinutes = currentDate.getMinutes();
          const currentSeconds = currentDate.getSeconds();
          const hourRotation = ((currentHours % 12) + currentMinutes / 60) * 30;
          const minuteRotation = (currentMinutes / 60) * 360;
          const secondRotation = (currentSeconds / 60) * 360;

          hourPointer.setAttribute(
            "transform",
            `rotate(${hourRotation}, ${hourCenter.x}, ${hourCenter.y})`
          );
          minutePointer.setAttribute(
            "transform",
            `rotate(${minuteRotation}, ${minuteCenter.x}, ${minuteCenter.y})`
          );
          secondPointer.setAttribute(
            "transform",
            `rotate(${secondRotation}, ${secondCenter.x}, ${secondCenter.y})`
          );
        }

        // Initial refresh to set the correct positions
        refreshClock();

        // Update every second for continuous movement
        setInterval(updateClock, 1000);

        // Embed the SVG directly in the DOM
        imageElement.parentNode.replaceChild(svgRoot, imageElement);
      };
      httpRequest.send();
    }

    if (imageElement.complete) {
      onImageLoad();
    } else {
      imageElement.addEventListener("load", onImageLoad);
    }
  }

  initializeClock(
    "marriage",
    new Date("2024-05-22"),
    { x: 274, y: 274 },
    { x: 274, y: 274 },
    { x: 274, y: 274 }
  );
  initializeClock(
    "marriage2",
    new Date("2024-05-22"),
    { x: 368, y: 232 },
    { x: 368, y: 232 },
    { x: 368, y: 232 }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const requestSection = document.querySelector(".request-section");
  const requestImg = document.querySelector(".request-img");
  const watches = document.querySelectorAll(".watch");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          requestImg.style.transform = "rotate(0deg)"; // Rotate back to 0 degrees

          // Show each watch one after another
          watches.forEach((watch, index) => {
            setTimeout(() => {
              watch.classList.add("show");
            }, 1300 * (index + 1)); // 1 second delay for each watch
          });
        }, 1000); // 1 second delay before starting the rotation
        observer.unobserve(entry.target); // Stop observing once the animation starts
      }
    });
  }, observerOptions);

  observer.observe(requestSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const orangeRightWatchElements = document.querySelectorAll(
    ".orange-right-watch"
  );
  const countryWatchSections = document.querySelectorAll(".country-section");
  const watchHoverElements = document.querySelectorAll(".watch-hover");

  // Function to check if element is in viewport with 10% offset
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight * 0.9 && // 10% offset
      rect.right <= windowWidth
    );
  }

  // Function to handle scroll event
  function onScroll() {
    countryWatchSections.forEach((section, index) => {
      const orangeWatch = orangeRightWatchElements[index];
      if (
        isInViewport(section) &&
        !orangeWatch.classList.contains("animated")
      ) {
        orangeWatch.classList.add("animate", "animated");
      }
    });
  }

  // Initial check
  onScroll();

  // Event listener for scroll
  window.addEventListener("scroll", onScroll);

  // Hover events
  watchHoverElements.forEach((hoverElement, index) => {
    const orangeWatch = orangeRightWatchElements[index];
    hoverElement.addEventListener("mouseenter", function () {
      orangeWatch.classList.add("hover-up");
      orangeWatch.classList.remove("hover-down");
    });
    hoverElement.addEventListener("mouseleave", function () {
      orangeWatch.classList.remove("hover-up");
      orangeWatch.classList.add("hover-down");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var splideBlog = new Splide(".splide", {
    focus: 0,
    type: "slide",
    arrows: true, // Enable arrows
    pagination: false,
    dragAngleThreshold: 60,
    autoWidth: false,
    pagination: false,

    rewind: true,
    rewindSpeed: 400,
    waitForTransition: false,
    updateOnMove: true,
    trimSpace: true,
    perPage: 2.3,
    perMove: 1,
    gap: "2rem",
    speed: 500,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    keyboard: true,
    reducedMotion: {
      speed: 0,
      rewindSpeed: 0,
      autoplay: "pause",
    },
    breakpoints: {
      991: {
        perPage: 1,
      },
      767: {
        perPage: 1,
      },
      647: {
        perPage: 1.2,
      },
      478: {
        perPage: 1.2,
      },
    },
    on: {
      move: function (event) {
        updateArrowOpacity2(event.index);
      },
    },
  });

  splideBlog.mount();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

(function () {
  emailjs.init("81lJIefcLX2aq_psX"); // Replace with your EmailJS user ID
})();

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var successMessage = document.querySelector(".sucess-message");

  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Prevent the default form submission
        emailjs.sendForm("service_r2ugbk4", "template_7tlcc7b", form).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            form.reset(); // Reset the form
            form.classList.remove("was-validated"); // Remove validation classes

            // Show success message modal
            let successModal = new bootstrap.Modal(
              document.getElementById("sucess-message-modal")
            );
            successModal.show();
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      }

      form2.classList.add("was-validated");
    },
    false
  );
});
var form2 = document.getElementById("order-form");
var successMessage2 = document.querySelector(".sucess-message");

form2.addEventListener(
  "submit",
  function (event) {
    if (!form2.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); // Prevent the default form submission
      emailjs.sendForm("service_r2ugbk4", "template_7tlcc7b", form2).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          form2.reset(); // Reset the form
          form2.classList.remove("was-validated"); // Remove validation classes

          // Show success message modal
          let successModal = new bootstrap.Modal(
            document.getElementById("sucess-message-modal")
          );
          successModal.show();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }

    form2.classList.add("was-validated");
  },
  false
);

document.querySelector(".button-ok").addEventListener("click", function () {
  document.querySelector(".cookies").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const myModal = document.getElementById("exampleModalCenter");
  const myInput = document.getElementById("myInput");

  if (myModal && myInput) {
    myModal.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });
  }
});
