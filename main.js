console.log(customers);

// <div class="person">
//     <img src="https://randomuser.me/api/portraits/women/62.jpg" alt="avatar" width="45%">
//     <div class ="container">
//         <h2>Sophia Burns</h2>
//             <div class="address">4339 Green Rd.</div>
//             <div class="city">Great Falls, AL 66032</div>
//             <div class="phone1">Home:003-035-5758</div>
//             <div class="phone2">Cell:748-746-0429</div>
//             <div class="dob">DOB: 28 July 1990 </div>
//             <div class="dor">Customer since: 9 March 2012</div>
//     </div>
function capitalizeFirstLetter(word) {
  console.log("capitalize name");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function remove(date) {
  console.log(" 08:08:59 GMT-0500");
  return date.slice(0, 10);
}

// ask js to build a div
const allCustomersDiv = document.querySelector("#directory");
// a loop to each customer
for (let customer of customers) {
  // showing the first and last name to dev
  console.log(`${customer.name.first} ${customer.name.last}`);
  let custDiv = document.createElement("div");
  custDiv.classList.add("person");
  // on this document create and element h2 and store as nameEl
  let nameEl = document.createElement("h2");
  nameEl.innerText = `${capitalizeFirstLetter(
    customer.name.first
  )} ${capitalizeFirstLetter(customer.name.last)}`;

  let addressEl = document.createElement("div");
  addressEl.innerText = `${customer.location.street.number} ${
    customer.location.street.name
  } ${customer.location.city}, ${nameToAbbr(customer.location.state)}
  ${customer.location.postcode}`;

  let dobEl = document.createElement("div");
  dobEl.innerText = `${moment(customer.dob.date).format("MMM Do, YYYY")}`;

  let emailEl = document.createElement("div");
  emailEl.innerText = `${customer.email}`;

  let dorEl = document.createElement("div");
  dorEl.innerText = `${customer.registered.date}`;

  let imageEl = document.createElement("img");
  imageEl.src = customer.picture.thumbnail;

  allCustomersDiv.appendChild(nameEl);
  allCustomersDiv.appendChild(custDiv);
  allCustomersDiv.appendChild(addressEl);
  allCustomersDiv.appendChild(dobEl);
  allCustomersDiv.appendChild(emailEl);
  allCustomersDiv.appendChild(dorEl);
  allCustomersDiv.appendChild(imageEl);
}
