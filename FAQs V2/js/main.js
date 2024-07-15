
let iconPlusList = document.querySelectorAll(".icon-plus");
let iconMinusList = document.querySelectorAll(".icon-minus");
let iconsList = document.querySelectorAll(".icons");
let questionList = document.querySelectorAll(".question");
let Qlist = document.querySelectorAll(".Q");

iconsList.forEach((icon, index) => {
  icon.addEventListener("click", function () {
    let iconPlus = iconPlusList[index];
    let iconMinus = iconMinusList[index];
    let q = Qlist[index];

    if (q.classList.contains("close")){
      q.classList.remove("close");
      q.classList.add("open");
    }else{
      q.classList.remove("open");
      q.classList.add("close");
    }

    if (iconPlus.classList.contains("not-active")) {
      iconPlus.classList.remove("not-active");
      iconPlus.classList.add("active");
      iconMinus.classList.remove("active");
      iconMinus.classList.add("not-active");
    } else {
      iconMinus.classList.remove("not-active");
      iconMinus.classList.add("active");
      iconPlus.classList.remove("active");
      iconPlus.classList.add("not-active");
      
    }
  });
});
questionList.forEach((question, index) => {
    question.addEventListener("click", function () {
    let iconPlus = iconPlusList[index];
    let iconMinus = iconMinusList[index];
    let q = Qlist[index];

    if (q.classList.contains("close")){
      q.classList.remove("close");
      q.classList.add("open");
    }else{
      q.classList.remove("open");
      q.classList.add("close");
    }

    if (iconPlus.classList.contains("not-active")) {
      iconPlus.classList.remove("not-active");
      iconPlus.classList.add("active");
      iconMinus.classList.remove("active");
      iconMinus.classList.add("not-active");
    } else {
      iconMinus.classList.remove("not-active");
      iconMinus.classList.add("active");
      iconPlus.classList.remove("active");
      iconPlus.classList.add("not-active");
    }
  });
});

