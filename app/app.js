import "./style.css";
//gets data
//shows data
async function getData() {
  try {
    const response = await fetch(
      "https://boardgamegeek.com/wiki/page/BGG_XML_API2"
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
