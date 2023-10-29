const categories = [];

jCategory.forEach((item) => {
  categories.push(item);
});

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

const displayItem = (items) => {
  document.getElementById("root").innerHTML = "";
  items.forEach((item) => {
    var { index, image, title, abastract } = item;
    const jList = document.createElement("div");
    jList.className = "jList";
    jList.innerHTML = `
      <img src=${image} alt="">
      <div>
      <h3>${title}</h3>
      <p>${abastract}</p>
      </div>
      <span id="key">Project Details</span>
    `;

    // Add event listener for redirection
    jList.addEventListener("click", () => {
      window.location.href = `job-details.html?id=${index}`;
    });

    document.getElementById("root").appendChild(jList);
  });
};

displayItem(categories);
