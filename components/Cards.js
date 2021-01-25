// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


const articleContainer = document.querySelector('.cards-container');

const articleMaker = function(artObj) {
    // creating the elements
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const authorImg = document.createElement('img');
    const spanName = document.createElement('span');

    // adding classes to elements
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imageDiv.classList.add('img-container');

    // adding data to elements
    headlineDiv.textContent = artObj.headline;
    authorImg.setAttribute('src', artObj.authorPhoto);
    spanName.textContent = artObj.authorName;

    // appending elements
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imageDiv);
    authorDiv.appendChild(spanName);
    imageDiv.appendChild(authorImg);

    // return main div
    return cardDiv;
}

// calling axios api and fetching data 
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then((response) => {
    // response is an object wihin an object that contains array of objects
    // loop throught the articles object and then grab each element(key), which is an array
    // loop over each element (key) using forEach
    // create newArticle using article maker and append to container
    for (var key in response.data.articles) {
        response.data.articles[key].forEach((articleObj) => {
            const newArticle = articleMaker(articleObj);
            articleContainer.appendChild(newArticle);
        })
    }
})
.catch(err => console.log(err, 'error, no data found!'));

