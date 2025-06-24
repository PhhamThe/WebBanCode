const items = document.querySelectorAll("#category-dropdown li a");
const input = document.getElementById("dropbtn-search");

items.forEach(function(item) {
  item.addEventListener('click', function() {
    
    input.textContent = this.textContent;
  });
});


