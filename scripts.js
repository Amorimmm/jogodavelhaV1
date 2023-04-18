let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message-container");
let messageText = document.querySelector("#message-container p")
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

        //check who won
        checkWinCondiction()

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

//who won
function checkWinCondiction() {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //Horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x") {
            //x 
            declareWinner("x")
        } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
            //o
            declareWinner("o")
    }
}

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x") {
            //x 
            declareWinner("x")
        } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
            //o
            declareWinner("o")
    }
}

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x") {
            //x 
            declareWinner("x")
        } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
            //o
            declareWinner("o")
    }
}

    //Vertical

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == "x" && b4Child == "x" && b7Child == "x") {
            //x 
            declareWinner("x")
        } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
            //o
            declareWinner("o")
    }
}
    
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == "x" && b5Child == "x" && b8Child == "x") {
            //x 
            declareWinner("x")
        } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
            //o
            declareWinner("o")
    }
}

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == "x" && b6Child == "x" && b9Child == "x") {
            //x 
            declareWinner("x")
        } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
            //o
            declareWinner("o")
    }
}

    //Diagonal

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == "x" && b5Child == "x" && b9Child == "x") {
            //x 
            declareWinner("x")
        } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
            //o
            declareWinner("o")
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == "x" && b5Child == "x" && b7Child == "x") {
            //x 
            declareWinner("x")
        } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
            //o
            declareWinner("o")
        }
    }

    //Deu velha
    let counter = 0;

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }

    if(counter == 9) {
        declareWinner("Deu velha")  
    }
}

//Clear the game, declare the winner and update the scoreboard
function declareWinner(winner) {

    let scoreBoardX = document.querySelector("#scoreBoard-1"); 
    let scoreBoardY = document.querySelector("#scoreBoard-2"); 
    let msg = "";

    if(winner == "x") {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = "X Venceu";
    } else if (winner == "o") {
        scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1;
        msg = "O venceu";
    } else {
        msg = "Deu velha";
    }

    //Display the msg
    messageText.innerHTML = msg
    messageContainer.classList.remove("hide")

    //hide message
    setTimeout(function() {
        messageContainer.classList.add("hide")
    },3000)

    //Clear the moves
    player1 = 0;
    player2 = 0;

    //Remove X and O
    let boxToRemove = document.querySelectorAll(".box div")

    for(let i = 0; i < boxToRemove.length; i++) {
        boxToRemove[i].parentNode.removeChild(boxToRemove[i]);
    }
}



