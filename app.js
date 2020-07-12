let initialCount = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll("#btn");


buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let current = e.currentTarget.classList;
    if(current.contains("increase")) {
      initialCount++
    }
    else if(current.contains('decrease')) {
      initialCount--
    }
    else {
      initialCount = 0
    }

    if(initialCount < 0) {
      value.style.color = "red";
    } else if (initialCount > 0) {
      value.style.color = "green";
    }else {
      value.style.color = "black"
    }
    value.innerHTML = initialCount;
  })
})