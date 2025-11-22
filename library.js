// --------------------------------------
// SAVE BOOK TO LOCAL STORAGE
// --------------------------------------
function saveBook(title, image, pdfLink) {
    let library = JSON.parse(localStorage.getItem("library")) || [];

    // Prevent duplicates
    let exists = library.some(book => book.title === title);
    if (exists) {
        alert("Already in your Library!");
        return;
    }

    // Add new book
    library.push({
        title: title,
        image: image,
        pdf: pdfLink
    });

    localStorage.setItem("library", JSON.stringify(library));
    alert("Book Saved!");
}


// --------------------------------------
// LOAD BOOKS FOR MYLIB.HTML
// --------------------------------------
function loadLibrary() {
    let library = JSON.parse(localStorage.getItem("library")) || [];
    let container = document.getElementById("myLibrary");

    if (!container) return; // Prevent error on other pages

    if (library.length === 0) {
        container.innerHTML = "<p>No books saved yet.</p>";
        return;
    }

    library.forEach(book => {
        container.innerHTML += `
            <div class="saved-book">
                <img src="${book.image}" class="saved-book-photo">
                <h3>${book.title}</h3>
                <a href="${book.pdf}" target="_blank" class="open-btn">Read Book</a>
            </div>
        `;
    });
}
