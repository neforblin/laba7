

let foldBtns = document.querySelectorAll(".fold-button");
let article_contents = document.querySelectorAll(".post-about");

for (let i = 0; i < foldBtns.length; i++) {

  foldBtns[i].addEventListener("click", (e) => {

    if (e.target.parentElement.className == "main-post folded") {
      e.target.parentElement.className = "main-post";
      e.target.innerHTML = "свернуть";
    }
    else {
      e.target.parentElement.className = "main-post folded";
      e.target.innerHTML = "развернуть";
    }

  });

}
