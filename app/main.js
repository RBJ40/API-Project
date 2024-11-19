import "./style.css";
//gets data
//shows data
const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

async function getData(URL) {
  try {
    const response = await fetch(URL); //fetch returns promise paste api link as string in quotation marks
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
    alert("Sorry. Could not find data requested.");
  }
}
getData(URL);

button.addEventListener("click", function () {
  //placeholder
});
