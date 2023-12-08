function start()
{
    document.getElementById("startbtn").style.display = "none";
    document.getElementById("grid").style.transition= "1s";
    document.getElementById("grid").style.opacity = "100%";

}

document.addEventListener('DOMContentLoaded', function () {
    const cards = ['1', '2','3','4','5','6','1','2','3','4','5','6'];

    const memoryGame = document.querySelector('#grid');
    cards.sort(() => Math.random() - 0.5);
    cards.forEach((card, index) => {
        
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.card = card;
        cardElement.dataset.index = index;
        memoryGame.appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    });

    let flippedCards = [];
    let locked = false;
    let points = 0;
    let clickCounter = 0;
    function flipCard() {
        if (locked) return;
    
        const card = this;
        card.classList.add('face-up'); 
        card.textContent = card.dataset.card;
    
        flippedCards.push(card);
    
        if (flippedCards.length === 2) {
            locked = true;
            clickCounter = +1;
            if(clickCounter == 2)
            // Check if the cards match
            setTimeout(() => {
                let [card1, card2] = flippedCards;
    
                if (card1.dataset.card === card2.dataset.card) {
                    // Cards match, keep them face up
                    card1.removeEventListener('click', flipCard);
                    card2.removeEventListener('click', flipCard);
                    card1.style.opacity = "0%";
                    card2.style.opacity = "0%";
                    points += 1;
                } else {
                    // Cards do not match, flip them face down
                    card1.classList.remove('face-up');
                    card2.classList.remove('face-up');
                    card1.textContent = "";
                    card2.textContent = "";
                }
    
                flippedCards = [];
                locked = false;
            }, 1000);
        }

        if(points = 6)
        {
            alert("Ön nyert!");
            location.reload;
        }
    }
});
