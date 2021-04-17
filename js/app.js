document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form'); 
    newItemform.addEventListener('submit', handleNewItemFormSubmit); 
    // We add an event listener to the form's 'submit' event, and use the ID of the input field,
    //  followed by the property value. For example, form.title.value.
    const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })

  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
    const buttonParagraph = document.querySelector('#submit-result');
    buttonParagraph.textContent = "Favourite movies list:";
    const moviesListItem = createMoviesListItem(event.target);
    const moviesList = document.querySelector('#movies-list'); 
    //if we want to access an element/ unorderd list with the ID 'movies-list' 
    // we could call document.querySelector('#movies-list')/('ul#movie-list')
    moviesList.appendChild(moviesListItem);

    event.target.reset();
}

const createMoviesListItem = function (form) {

    const moviesListItem = document.createElement('li'); 
    //to create new element or list, we would call document.createElement('li')
    moviesListItem.classList.add('movies-list-item');

    const title = document.createElement('h2');
    title.textContent = form.title.value; 
    //textContent allows us to set the text on an element 
    // and will over-write any existing text content the element has. appendChild adds a new element to an existing one.
    moviesListItem.appendChild(title);
    
    const cast = document.createElement('p');
    cast.textContent = form.cast.value;
    moviesListItem.appendChild(cast);
    
    const year = document.createElement('p');
    year.textContent = form.year.value;
    moviesListItem.appendChild(year);

    const type = document.createElement('p');
    type.textContent = form.type.value;
    moviesListItem.appendChild(type);

    const length = document.createElement('p');
    length.textContent = form.length.value;
    moviesListItem.appendChild(length);
    
    const suitable = document.createElement('p');
    suitable.textContent = form.suitable.value;
    moviesListItem.appendChild(suitable);
    
    return moviesListItem;

}

const handleDeleteAllClick = function (event) {
    const moviesList = document.querySelector('#movies-list');
    moviesList.innerHTML = '';
}

