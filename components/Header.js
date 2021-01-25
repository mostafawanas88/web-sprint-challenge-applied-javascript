// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
// creating the elements
    const headerDiv = document.createElement('div');
    const spanElement1 = document.createElement('span');
    const titleElement = document.createElement('h1');
    const spanElement2 = document.createElement('span');

// adding classes to elements
    headerDiv.classList.add('header');
    spanElement1.classList.add('date');
    spanElement2.classList.add('temp');

// adding text content to elements
    spanElement1.textcontent = 'MARCH 28, 2020';
    titleElement.textContent = 'Lambda Times';
    spanElement2.textContent = '98';

// appneding elements to each other 
    headerDiv.appendChild(spanElement1);
    headerDiv.appendChild(titleElement);
    headerDiv.appendChild(spanElement2);

// return headerDiv
    return headerDiv;
}

const newsPaperHeader = Header();

const mainHeader = document.querySelector('.header-container');

mainHeader.appendChild(newsPaperHeader);
