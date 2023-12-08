function start()
{
    document.getElementById("startbtn").style.display = "none";
    document.getElementById("grid").style.transition= "1s";
    document.getElementById("grid").style.opacity = "100%";

}

document.addEventListener('DOMContentLoaded', function () {
    const gridSize = 4; // Set the size of the grid
    const totalCards = gridSize * gridSize;
    const numbers = Array.from({ length: totalCards / 2 }, (_, index) => index + 1);

    const cards = ['1', '2','3','4','5','6','1','2','3','4','5','6'];

    const memoryGame = document.querySelector('#grid');

    // Shuffle the cards
    cards.sort(() => Math.random() - 0.5);

    // Create card elements and append them to the memory game container
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.card = card;
        cardElement.dataset.index = index;
        cardElement.textContent = '?'; // Initial state, face down
        memoryGame.appendChild(cardElement);

        // Add click event listener to each card
        cardElement.addEventListener('click', flipCard);
    });

    let flippedCards = [];
    let locked = false;

    function flipCard() {
        if (locked) return;
    
        const card = this;
        card.classList.add('face-up'); // Add the 'face-up' class to show the text/image
    
        flippedCards.push(card);
    
        if (flippedCards.length === 2) {
            locked = true;
    
            // Check if the cards match
            setTimeout(() => {
                const [card1, card2] = flippedCards;
    
                if (card1.dataset.card === card2.dataset.card) {
                    // Cards match, keep them face up
                    card1.removeEventListener('click', flipCard);
                    card2.removeEventListener('click', flipCard);
                    card1.opacity = "0%";
                    card2.opacity = "0%";
                } else {
                    // Cards do not match, flip them face down
                    card1.classList.remove('face-up');
                    card2.classList.remove('face-up');
                }
    
                flippedCards = [];
                locked = false;
            }, 1000);
        }
    }
});
