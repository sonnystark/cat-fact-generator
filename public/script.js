document.querySelector("#btnLoad").addEventListener("click", () => {
  getCatFacts();
  getCatImg();
});

// Fact generator function
async function getCatFacts() {
  const response = await fetch("/catFact"); // Response from the route
  const data = await response.json(); // Formatting it to json
  let catFact = data[Math.round(Math.random() * data.length)].text;
  console.log(catFact);
  document.querySelector("#catContainerFact").textContent = catFact;
}

// Image generator function
async function getCatImg() {
  const response = await fetch("/catImg"); // Response from the route
  const data = await response.json(); // Formatting it to json
  let catImg = data.value[Math.floor(Math.random() * data.value.length)];
  let catImgUrl = catImg.thumbnailUrl;
  let catImgAlt = catImg.name;
  console.log(catImg);

  if (document.querySelector("#catImg") !== null) {
    document.querySelector("#catImg").remove();
  }

  let img = document.createElement("img");
  img.id = "catImg";
  img.src = catImgUrl;
  img.alt = catImgAlt;
  document.querySelector("#catContainerImg").appendChild(img);
}
