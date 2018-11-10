function getBooks(){

  let search_term = document.getElementById('search').value
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search_term}`)
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Books</h2>';
      data.items.forEach(function(book) {
        output += `
          <div id="bookInfo">
            <h2>${book.volumeInfo.title}</h3>
            <h3>${book.volumeInfo.authors}</h3>
            <h3>${book.volumeInfo.publisher}</h3>
            <a href="${book.volumeInfo.infoLink}">More info</a>
          </div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
}


document.getElementById('getBooks').addEventListener('click', getBooks, false)