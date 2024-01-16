const images = [
  "imgs/download-compresskaru.com.png",
  "imgs/download-compresskaru.com (1).png",
  "imgs/download-compresskaru.com (2).png",
  "imgs/download-compresskaru.com (3).png",
  "imgs/download-compresskaru.com (4).png",
  "imgs/download-compresskaru.com (5).png",
  "imgs/download-compresskaru.com (6).png",
  "imgs/download-compresskaru.com (7).png",
  "imgs/download-compresskaru.com (8).png",
  "imgs/download-compresskaru.com (9).png",
  "imgs/download-compresskaru.com (10).png",
  "imgs/download-compresskaru.com (11).png",
];

const imgContainer = document.getElementsByClassName("img-container");
if (images.length === imgContainer.length) {
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i];
    imgContainer[i].appendChild(img);
  }
}

const buttons = document.getElementsByTagName("button");
for (let j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener("click", removeImg);
}

function removeImg() {
  const clickedButton = document.getElementById(this.id);
  clickedButton.parentElement.remove();
}
