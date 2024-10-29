// Select elements
const editBtn = document.getElementById("editBtn");
const editModal = document.getElementById("editModal");
const closeBtn = document.querySelector(".close-btn");
const editForm = document.getElementById("editForm");

// Show modal on Edit button click
editBtn.addEventListener("click", () => {
    editModal.style.display = "flex";
});

// Close modal
closeBtn.addEventListener("click", () => {
    editModal.style.display = "none";
});

// Save changes and update main page
editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Update main form with edited values
    document.getElementById("name").value = document.getElementById("editName").value;
    document.getElementById("email").value = document.getElementById("editEmail").value;
    document.getElementById("phone").value = document.getElementById("editPhone").value;

    // Hide modal
    editModal.style.display = "none";
});
