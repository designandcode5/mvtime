document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    alert("Added to shortlist!");
    // You can add more functionality here, like updating a shortlist array or local storage
  });
});

document.querySelectorAll(".image-container").forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    window.location.href = url;
  });
});

function toggleDropdown() {
  const dropdown = document.getElementById("5678");
  const mainContent = document.getElementById("9101");
  dropdown.classList.toggle("show");

  if (dropdown.classList.contains("show")) {
    mainContent.classList.add("shifted");
  } else {
    mainContent.classList.remove("shifted");
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".genre")) {
    const dropdowns = document.getElementsByClassName("genre-info");
    const mainContent = document.getElementById("9101");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        mainContent.classList.remove("shifted");
      }
    }
  }
};

function redirectTo(url) {
  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("#nav-list li");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      navItems.forEach((navItem) => navItem.classList.remove("active"));

      // Add active class to the clicked item
      this.classList.add("active");
    });
  });
});

setTimeout(function() {
  $('#9101').css({
      opacity: 1,
      transform: 'scale(1, 1)'
  })
}, 1);
$('#9101').removeClass('unloaded')
