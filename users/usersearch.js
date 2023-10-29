const categories = [];

jCategory.forEach((item) => {
  categories.push(item);
});

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.userName.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

const displayItem = (items) => {
  document.getElementById("root").innerHTML = "";
  items.forEach((item) => {
    var { index, userImage, userName, heroPosition, contro } = item;
    const jList = document.createElement("div");
    jList.className = "userList";
    jList.innerHTML = `
      <img src=${userImage} alt="">
      <div>
      <h3>${userName}</h3>
      <p>🎯 ${heroPosition}</p>
      <h6>🚀 Contributed in ${contro} projects</h6>
      </div>
      <span id="key">View Portfolio</span>
    `;

    // Add event listener for redirection
    jList.addEventListener("click", () => {
      window.location.href = `user-details.html?id=${index}`;
    });

    document.getElementById("root").appendChild(jList);
  });
};

displayItem(categories);
