function showMenu() {
  var menu = document.getElementById("menu");
  if (menu.className === "nav") {
      menu.className += " show";
  } else {
      menu.className = "nav";
  }
}

   var linkContainer = document.getElementById("menu");

    // Get all buttons with class="btn" inside the container
    var links = linkContainer.getElementsByClassName("header");
    
    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    } 

    // انتخاب تمام تگ‌های progress
const progresses = document.querySelectorAll('progress');

progresses.forEach(progress => {
  const targetValue = progress.value; // مقدار نهایی (مثل 70)
  progress.value = 0; // از 0 شروع می‌کنیم

  const speed = 20; // سرعت انیمیشن (هر چه عدد کمتر، سرعت بیشتر)
  const increment = () => {
    if (progress.value < targetValue) {
      progress.value++;
      requestAnimationFrame(increment);
    }
  };
  increment();
});
