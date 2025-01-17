import "./style.css";
//gets data
//shows data
const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const yugi = document.querySelector(".card");

async function getData(URL) {
  try {
    const response = await fetch(URL); //fetch returns promise paste api link as string in quotation marks
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h2").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
    alert("Sorry. Could not find data requested.");
  }
}
getData(URL);

function createCards(data) {
  const container = document.querySelector(".container");
  data.forEach((data) => {
    container.insertAdjacentHTML;
    "beforeend", `<div class="card"></div>`;
    const container = document.querySelector(".container");
    console.log(data);
  });
  container.appendChild(div);
}

createCards(data);

document.getElementById("search").addEventListener("click", function () {
  const thing = document.getElementById("searchBar").value;
  data.forEach((card) => {
    if (thing === card.name && thing === yugi[data-name]) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="card" data-name = "${data.name}"><div/>
        <h2>Name: ${data.name}</h2>;
        <p>Card type: ${data.type}</p>;</div>
      `
      );
    }
  });
});


