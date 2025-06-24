const items = document.querySelectorAll("#category-dropdown li a");
const input = document.getElementById("input-search");

items.forEach(function(item) {
  item.addEventListener('click', function() {
    
    input.value = this.textContent;
  });
});


