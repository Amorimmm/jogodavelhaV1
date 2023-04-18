let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p")
let secondPlayer

// Move counter

let player1 = 0;
let player2 = 0;

// Adding "clicks" event to "boxes"

for(let i = 0; i < boxes.length; i++) {

    //When someone clicks on the box    
    boxes[i].addEventListener("click", function() {

    let el = checkEl(player1, player2);

    //Checks if it already has the "X" or "O"
    if(this.childNodes.length == 0) {
        
        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);
    
        //Compute play
        if(player1 == player2) {
            player1++;
        } else {
            player2++
        }
    }
    })
}

//See who will play
function checkEl(player1, player2) {
    if(player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;

}
