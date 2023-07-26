var plusBtns = document.getElementsByClassName("fa-square-plus ");
for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", function (e) {
    console.log(e.target.previousElementSibling.innerText++);
    calcule();
  });
}
var minusBtns = document.getElementsByClassName("fa-square-minus");
for (let i = 0; i < minusBtns.length; i++) {
  minusBtns[i].addEventListener("click", function (e) {
    if (e.target.nextElementSibling.innerText > 1) {
      console.log(e.target.nextElementSibling.innerText--);
      calcule();
    }
  });
}
var likeBtns = document.getElementsByClassName("fa-thumbs-up");
for (let i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", function (e) {
    e.target.classList.toggle("liked");
  });
}
var trushBtns = document.getElementsByClassName("fa-trash");
for (let i = 0; i < trushBtns.length; i++) {
  trushBtns[i].addEventListener("click", function (e) {
    e.target.closest(".single-item").remove();
    calcule();
  });
}
function calcule() {
  var sum = 0;
  var prods = document.getElementsByClassName("single-item");
  for (let i = 0; i < prods.length; i++) {
    console.log(prods[i].querySelector(".price").innerText);
    console.log(prods[i].querySelector(".p-y span").innerText);
    sum +=
      prods[i].querySelector(".price").innerText *
      prods[i].querySelector(".p-y span").innerText;
  }
  document.getElementById("total").innerText = sum;
}

calcule();
