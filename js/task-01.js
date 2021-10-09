const elRefs = {
  categories: document.querySelector("#categories"),
  item: document.querySelector(".item"),
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
item(elRefs.item);
