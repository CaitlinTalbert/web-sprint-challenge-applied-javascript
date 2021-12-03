//const Header = (title, date, temp) => {
const header = [
  {
    'title:',   
    'date:',  
    'temp:', 
  }
];

function headerMaker (headerInfo) {

const headerDiv = document.createElement('div'); 
const date = document.createElement('span'); 
const title = document.createElement('h1'); 
const temp = document.createElement('span'); 

headerDiv.appendChild(date); 
headerDiv.appendChild(title); 
headerDiv.appendChild(temp); 

date.textContent = headerInfo.date; 
title.textContent = headerInfo.title; 
temp.textContent = headerInfo.temp; 


return header; 
}; 
console.log(headerMaker(header)); 
document.querySelector('.header-container').appendChild(headerMaker(header)); 

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //



const headerAppender = (selector) => {
console.log(selector)

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
