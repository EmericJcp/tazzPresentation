let videoContainer = document.querySelector(".video-container");
let contentContainer = document.querySelector(".content-container");

let addVideo = () => {
  let video = document.createElement("video");
  video.src = "assets/video/test.mp4";
  video.controls = true;
  videoContainer.appendChild(video);
};

let removeVideo = () => {
  let video = document.querySelector(".video-container video");
  if (video !== null) video.remove();
};

let addSunImg = () => {
  let sunImg = document.createElement("img");
  sunImg.src = "assets/img/soleil.svg";
  sunImg.classList.add("soleil");
  contentContainer.appendChild(sunImg);
  console.log("1");
};

let removeSunImg = () => {
  let sunImg = document.querySelector(".soleil");
  if (sunImg !== null) sunImg.remove();
  console.log("2");
};

let windowSize = (e) => {
  let video = document.querySelector(".video-container video");
  let sunImg = document.querySelector(".soleil");

  newWidth = window.innerWidth;

  if (newWidth >= 1180) {
    if (video === null) addVideo(newWidth);
  } else {
    removeVideo(newWidth);
  }

  if (newWidth >= 1325) {
    if (sunImg === null) addSunImg(newWidth);
    console.log("3");
  } else {
    removeSunImg(newWidth);
    console.log("4");
  }
};

windowSize();
window.onresize = windowSize;

let toggle = () => {
  let trailer = document.querySelector(".video-presentation");
  let video = document.querySelector("video");
  trailer.classList.toggle("active");
  video.pause();
};
