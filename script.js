import BagsFootwear from "./data/BagsFootwear.js";
import BeautyHealth from "./data/BeautyHealth.js";
import Electronic from "./data/Electronic.js";
import Homekitchen from "./data/Homekitchen.js";
import JewellaryAccessories from "./data/JewellaryAccessories.js";
import Kids from "./data/Kids.js";
import Mens from "./data/Mens.js";
import WomenEthnic from "./data/WomenEthnic.js";
import WomenWestern from "./data/WomenWestern.js";

let InputSearchel = document.querySelector(".InputSearch");
let recentInput = [];
let formInput = document.getElementById("inputform");
const listofRecente1 = document.querySelector(".listofRecent");

InputSearchel.addEventListener("keydown", () => {
  // console.log(InputSearchel);
  if (InputSearchel.value) {
    document.getElementById("closeSearch").style.display = "block";
  } else {
    document.getElementById("closeSearch").style.display = "none";
  }
});

formInputE1.addEventListener("submit", (e) => {
  e.preventDefault();
  let listofRecentHTMLE1 = "";

  recentInput.unshift(InputSearchel.value);
  console.log(recentInput);

  if (recentInput.length > 0) {
    for (let i = 0; i < recentInput.length; i++) {
      listofRecentHTMLE1 += (
        <div class="recentItem">
          <div class="recentIcon">
            <img src="alarm.webp" />
          </div>
          <p>${recentInput[i]}</p>
        </div>
      );
    }
    listofRecente1.innerHTML = listofRecentHTMLE1;
  }
});

let WomenEthic = document.getElementById("WomenEthic");
function WomenEthicFunc() {
  return WomenEthnic.map((e1) => {
    let list = "";
    list = e1.data.map((element) => `<p>${element}</p>`).join("");
    return `
    <div class="column">
    <h4>${e1.heading}</h4>
    ${list}
    </div>
    `;
  }).join("");
}
WomenEthic.innerHTML = WomenEthicFunc();

//
let womenWestern = document.getElementById("womenWestern");
function womenWesternFunc() {
  return womenWestern
    .map((e1) => {
      let list = "";
      list = e1.data.map((element) => `<p>${element}</p>`).join("");

      return `
    <div class="column">
    <h4>${e1.heading}</h4>
    ${list}
    </div>
    `;
    })
    .join("");
}

womenWestern.innerHTML = womenWesternFunc();
