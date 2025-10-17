function showMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}


   var linkContainer = document.getElementById("menu");

    
    var links = linkContainer.getElementsByClassName("header");
    
   
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    } 

    
document.addEventListener("DOMContentLoaded", () => {
  const progresses = document.querySelectorAll("progress");
  progresses.forEach(progress => {
    const targetValue = progress.value;
    progress.value = 0;
    const update = () => {
      if (progress.value < targetValue) {
        progress.value++;
        requestAnimationFrame(update);
      }
    };
    update();
  });
});

