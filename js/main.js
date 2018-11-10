function getBooks(){

  let search_term = document.getElementById('search').value
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search_term}`)
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Books</h2>';
      data.items.forEach(function(book) {
        output += `
          <div>
            <h3>${book.volumeInfo.title}</h3>
          </div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })

}

document.getElementById('getBooks').addEventListener('click', getBooks, false)