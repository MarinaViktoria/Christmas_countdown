function christmasCountdown() {

    const christmasDate = new Date("December 25, 2023 00:00");
    const now = new Date();
    const diff = christmasDate - now;
    
    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;
    
    const displayDay = Math.floor(diff / msInDays);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDays) / msInHours);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHours) / msInMinutes);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinutes) / msInSeconds);
    document.querySelector(".seconds").textContent = displaySecond;
    
    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timeID);
        merryChristmas();
    }
}
let timeID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!!";
    heading.classList.add("blue");
}

const button = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");
button.addEventListener("click", function() {
    
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})

particlesJS("particles-js", {
    particles: {
      number: {
        value: 500, 
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "image",
        stroke: {
          width: 30,
          color: "blue"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "icons8-winter-16.png",
          width: 200,
          height: 200
        }
      },
      opacity: {
        value: 10,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 7,
          sync: false
        }
      },
      size: {
        value: 20, /*Größe der Schneeflocken*/
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.5,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.5,
        width: 4
      },
      move: {
        enable: true,
        speed: 2, /*Geschwindigkeit mit der die Flocken fallen*/
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 200,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

 
  