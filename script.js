const apiUrl = 'https://striveschool-api.herokuapp.com/books'
const bookContainer = document.querySelector("#bookContainer")

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const books = data;
        console.log(books);

        let htmlCardsContent = ""

        books.forEach((book) => {
            let bookImage = book.img
            let bookTitle = book.title
            let bookPrice = book.price
            let bookCategory = book.category
            htmlCardsContent += `<div class="card col-4">
            <img src="${bookImage}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${bookTitle}</h5>
                <p class="card-text"> Price: ${bookPrice} &dollar;</p>
                <p class="card-text"> Category: ${bookCategory}</p>
                <a href="#" class="btn btn-primary">Add</a>
                <a href="#" class="btn btn-danger">Remove</a>
            </div>
        </div>`
            bookContainer.innerHTML = htmlCardsContent
        });
    })
    .catch(() => {
        console.error("Errore");
    });