'use strict';

const cards = document.querySelectorAll('.card-content__text');


cards.forEach((card) => {
    let content = card.textContent;
    const newContent = content.substring(0, 150) + '...';
    console.log(content.substring(0, 150) + '...')
    card.innerHTML = newContent;
})


// let contentText = content.textContent;

// contentText = contentText.substring(0, 150) + '...';

// console.log(contentText);





