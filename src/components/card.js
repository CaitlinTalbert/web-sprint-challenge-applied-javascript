import axios from "axios";

const Card = (article) => {
  //create elements
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainerDiv = document.createElement("div");
  const authorPhotoElem = document.createElement("img");
  const authorNameElem = document.createElement("span");

  //structure
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  authorDiv.appendChild(authorNameElem);
  imgContainerDiv.appendChild(authorPhotoElem);

  //refs
  headlineDiv.textContent = article.headline;
  authorPhotoElem.src = article.authorPhoto;
  authorNameElem.textContent = `By ${article.authorName}`;

  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainerDiv.classList.add("img-container");

  cardDiv.addEventListener("click", () => {
    console.log(headlineDiv.textContent);
  });

  return cardDiv;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  axios
    .get(`http://localhost:5000/api/articles`)
    .then((resp) => {
      console.log(resp.data.articles.bootstrap);
      resp.data.articles.bootstrap.forEach((el) => {
        document.querySelector(selector).appendChild(Card(el));
      });
      resp.data.articles.javascript.forEach((el) => {
        document.querySelector(selector).appendChild(Card(el));
      });
      resp.data.articles.technology.forEach((el) => {
        document.querySelector(selector).appendChild(Card(el));
      });
      resp.data.articles.jquery.forEach((el) => {
        document.querySelector(selector).appendChild(Card(el));
      });
      resp.data.articles.node.forEach((el) => {
        document.querySelector(selector).appendChild(Card(el));
      });
    })
    .catch((error) => {
      console.error(error);
    });
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
