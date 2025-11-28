var sound = {
    a: "./sounds/28.mp3",
    s: "./sounds/29.mp3",
    d: "./sounds/30.mp3",
    f: "./sounds/31.mp3",
    g: "./sounds/32.mp3",
    h: "./sounds/33.mp3",
    j: "./sounds/34.mp3",
    w: "./sounds/35.mp3",
    e: "./sounds/36.mp3",
    t: "./sounds/37.mp3",
    y: "./sounds/38.mp3",
    u: "./sounds/39.mp3",
    k: "./sounds/40.mp3",
    l: "./sounds/41.mp3",
    semi: "./sounds/42.mp3",
    o: "./sounds/43.mp3",
    p: "./sounds/44.mp3",
};

function playSound(key) {
    if(sound[key]) {
        let audio = new Audio(sound[key]);
        audio.play();
        let keyDiv = document.querySelector(`.key[data-key="${key}"]`);
        if (keyDiv) keyDiv.classList.add("active");
        setTimeout(() => keyDiv.classList.remove("active"), 180);
    }
}

document.addEventListener('keydown', (event) => {
    playSound(event.key.toLowerCase());
});

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        playSound(key.dataset.key);
    });
});

document.addEventListener('keydown', (event) => {
    let key = event.key.toLowerCase();
    if (key === ";") key = "semi";
    playSound(key);
});

const wrapper = document.querySelector(".keyboard-wrapper");
const keys = document.querySelectorAll(".key span");

wrapper.addEventListener("mouseenter", () => {
  keys.forEach((span, i) => {
    setTimeout(() => {
      span.classList.add("show");
    }, i * 50); 
  });
});

wrapper.addEventListener("mouseleave", () => {
  keys.forEach((span, i) => {
    setTimeout(() => {
      span.classList.remove("show");
    }, i * 50); 
  });
});
