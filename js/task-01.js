const refs = {
  categories: document.querySelector("#categories"),
  item: document.querySelectorAll(".item"),
};

function countCategories(element) {
  console.log(`В списке ${element.children.length} категорий`);
}

function itemCount(element) {
  element.forEach((item) => {
    console.log(item.firstElementChild.innerText);
    console.log(item.lastElementChild.children.length);
  });
}

countCategories(refs.categories);
itemCount(refs.item);
