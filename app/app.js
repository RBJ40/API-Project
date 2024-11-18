import "./style.css";
//gets data
//shows data
const URL = "https://suredbits.com/api/#historical-prices-data-api";
async function getData(URL) {
  button.addEventListener("click", function () {
    //placeholder
  });
  try {
    const response = await fetch(
      "https://suredbits.com/api/#historical-prices-data-api"
    ); //fetch returns promise paste api link as string in quotation marks
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
getData();
