function getBooks(){

  let search_term = document.getElementById('search').value
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search_term}`)
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Search results:</h2>';
      data.items.forEach(function(book) {
        output += `
          <div id="bookInfo">
          <div id="image">
            <img src="${book.volumeInfo.imageLinks.smallThumbnail}">
          </div>
            <div id="title">
              <h2>Volume Title: </h2>
              <p>${book.volumeInfo.title}</p>
            </div>
            <div id="author">
              <h3>Volume Author(s): </h3>
              <p>${book.volumeInfo.authors}</p>
            </div>
            <div id="otherInfo">
              <h3>Volume Publisher:</h3>
              <p>${book.volumeInfo.publisher}</p>
              <a href="${book.volumeInfo.infoLink}">More info</a>
            </div>
          </div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
}


document.getElementById('getBooks').addEventListener('click', getBooks, false)