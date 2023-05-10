let http = new XMLHttpRequest();

http.open("get", "inventory.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let inventory = JSON.parse(this.responseText);

    let output = "";

    for (let item of inventory) {
      output += `
                <div class="car">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="title">${item.title}</p>
                    <p class="year">${item.year}</p>
                    <p class="color">${item.color}</p>
                    <p class="mileage">${item.mileage}</p>
                </div>
                `;
    }

    document.querySelector(".inventory").innerHTML = output;
  }
};
