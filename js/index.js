// Get all pics via querySelectorAll()
const cards = [...document.querySelectorAll('[class^="card"]')];

function flip(){
    this.classList.add('flip');

}

// STEP 1 - Use a for loop to make each card flip upon click

// STEP 2 - Comment out code above. Now use a do while loop to make each card flip upon click

// STEP 3 - Comment out code above. Now use a .forEach() loop to make each card flip upon click
// cards.foreach (function(element){
//     Elements.addEventListener('click', flip);
// });


// STEP 4 - Comment out code above. Now use a for OF loop to make each card flip upon click
// for (const card of cards) {
//     cards.addEventListener('click', flip);
// }
// STEP 5 - Comment out code above. Now use .map() loop to make each card flip upon click

cards.map(function(card){
    (card.addEventListener('click', flip))
});