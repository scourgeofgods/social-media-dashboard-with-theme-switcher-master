const switchToggle = document.querySelector("#darkmode");

switchToggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark-theme");
    console.log("chekced");
  } else {
    document.body.classList.remove("dark-theme");
  }
});
