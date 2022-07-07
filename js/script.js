const inputElm = document.querySelector("input");
const tagsContainer = document.querySelector(".content ul");
const tagsCounterElm = document.querySelector(".details p span");
const removeAllBtn = document.querySelector("button");

let tags = ["react", "js"];

const generateTag = () => {
  tagsCounter();
  document.querySelectorAll(".content ul li").forEach((tag) => tag.remove());
  let newTag = null;
  [...tags].reverse().forEach((tag) => {
    newTag = `<li>${tag} <i onclick="removeTag(this,'${tag}')" class="uil uil-multiply"></i> </li>`;
    tagsContainer.insertAdjacentHTML("afterbegin", newTag);
  });
};
const tagsCounter = () => {
  inputElm.focus();
  tagsCounterElm.innerHTML = 10 - tags.length;
  if (tags.length === 10) {
    [tagsContainer, inputElm].forEach((element) =>
      element.classList.add("active")
    );
  } else {
    [tagsContainer, inputElm].forEach((element) =>
      element.classList.remove("active")
    );
  }
};
const removeAll = () => {
  document.querySelectorAll(".content ul li").forEach((tag) => tag.remove());
  tags = [];
  tagsCounter();
  inputElm.value = "";
};
const removeTag = (Elm, tag) => {
  tags.splice(tags.indexOf(tag), 1);
  Elm.parentElement.remove();
  tagsCounter();
};
const addTag = (e) => {
  let tag = e.target.value;
  if (e.key === "Enter") {
    if (tags.length < 10 && tag.length > 0) {
      tag.split(",").forEach((newTag) => {
        if (!tags.includes(newTag.toLowerCase())) {
          tags.push(newTag.toLowerCase());
        }
      });
      generateTag();
    }

    inputElm.value = "";
  }
};

inputElm.addEventListener("keyup", addTag);
removeAllBtn.addEventListener("click", removeAll);
window.addEventListener("load", generateTag);
