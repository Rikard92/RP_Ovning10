let CardButon = document.getElementById("GetCard");
let DivCard = document.getElementById("DispalyCard");
let pulled = false;

function getCard(){  

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")     
    .then(res => res.json())     
    .then(data =>     
        { 
            if (pulled) {
                DivCard.removeChild(DivCard.children[0]);
              }

            console.log(data.cards[0]);
            const card = document.createElement("img");
            card.src=data.cards[0].image;
            card.width = 100;
            DivCard.appendChild(card);
            pulled= true;

    }).catch(err => console.log(err))        
 }


 CardButon.addEventListener("click", e =>{ 
    getCard()
         
    });
