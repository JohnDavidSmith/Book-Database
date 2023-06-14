const apiHost = "https://www.googleapis.com/books/v1/volumes";
const apiKey = "AIzaSyABF23V9yuBeq3ab4nk0HxGLDuc5y8ZNmQ";
const api = "";

const popularDiv = document.getElementById("popularDiv");

const popularArray = [
  "?q=x",
  "?q=seduced+by+story",
  "?q=All+This+Could+Be+Different",
  "?q=A.M.+in+Little+America",
  "?q=The+Furrows",
  "?q=Siren+Queen",
  "?q=Strangers+to+Ourselves",
  "?q=The+World+Keeps+Ending,+and+the+World+Goes+On",
  "?q=Manhunt",
];

const mangaArray = [
  "?q=One+Piece",
  "?q=Demon+Slayer",
  "?q=One+Punch+Man",
  "?q=Black+Clover",
  "?q=Bleach",
  "?q=Chainsaw+Man",
  "?q=Death+Note",
  "?q=Code+Geass",
  "?q=Beserk",
];

const classicArray = [
  "?q=To+Kill+a+Mockingbird",
  "?q=The+Great+Gatsby",
  "?q=Pride+and+Prejudice",
  "?q=One+Hundred+Years+of+Solitude",
  "?q=In+Cold+Blood",
  "?q=Wide+Sargasso+Sea",
  "?q=Brave+New+World",
  "?q=I+Capture+The+Castle",
  "?q=Jane+Eyre",
];

//?=Lord+of+the+Rings

async function getFetch() {
  if (searchValue.trim() === "") {
    return;
  }
  for (x = 0; x < popularArray.length; x++) {
    let responsePopular = await fetch(apiHost + popularArray[x]);
    let popularData = await responsePopular.json();

    let responseManga = await fetch(apiHost + mangaArray[x]);
    let mangadata = await responseManga.json();

    let responseClassic = await fetch(apiHost + classicArray[x]);
    let classicData = await responseClassic.json();

    const newDiv = document.createElement("div");
    const newH2 = document.createElement("h2");
    const newImg = document.createElement("IMG");

    newImg.setAttribute(
      "src",
      popularData.items.volumeInfo.imageLinks.smallThumbnail
    );

    newH2.textContent += `${popularData.items.volumeInfo.title}`;

    newDiv.appendChild(newImg);
    newDiv.appendChild(newH2);

    popularDiv.appendChild(newDiv);
  }
}

getFetch();
