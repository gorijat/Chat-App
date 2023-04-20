let textAreas = document.querySelectorAll('textarea');
let mainArea = document.querySelector('.main-area');
let currentPlayerName = '';
 let direction = ['start','end'];
 let flexBool = true; 
 let badWords = ["shit","fuck","ballshit","apsolutlyfuck"];
 

textAreas.forEach(area => area.addEventListener('keyup',placeMessage));

function placeMessage(e){
if (e.key === "Enter") { //get value from input field
    let message = this.value;
    
    badWords.forEach(word=>{
        let gg = new RegExp(word,"gi") //solution for more than one bad word and how to cover 
        message = message.replace(gg,"****")
    })

    let playerName = this.id.split('-')[0]; //remove area from player1(2)-area
    if (playerName !== currentPlayerName) { //this is solution for left and right msg
        flexBool = !flexBool;
        currentPlayerName = playerName
    }

    mainArea.innerHTML += 
    //create template for msg
    `
    <div class="row" style = "justify-content: ${direction[+flexBool]}">
        <div class="card">
        <p id="move">${playerName}</p>
        <p>${message}</p>
        </div>
    </div>
    `.trim();
    mainArea.scrollTop = mainArea.scrollHeight; 
    this.value = "";
}
}