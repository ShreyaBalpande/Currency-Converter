const API_KEY = "3cdab66b7c87e95969938a2d"; 
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = parseFloat(amount.value); // Convert to a number
  if (isNaN(amtVal) || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  // Construct the API URL
  const URL = `${BASE_URL}/${fromCurr.value}`;
  console.log("API URL:", URL); // Debug the constructed URL

  try {
    let response = await fetch(URL);
    let data = await response.json();
    console.log("API Response:", data);

    if (data.result !== "success") {
        throw new Error(data.error.info);
    }

    // Check the structure of the conversion rates
    if (!data.conversion_rates || !data.conversion_rates[toCurr.value]) {
        throw new Error(`Exchange rate for ${toCurr.value} not found.`);
      }

    let rate = data.conversion_rates[toCurr.value];
    let finalAmount = (amtVal * rate).toFixed(2); // Round to 2 decimals
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    msg.innerText = `Error: ${error.message}`;
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
