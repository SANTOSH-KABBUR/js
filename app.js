const rock = document.querySelector('rock')
const paper = document.querySelector('paper')
const scissor = document.querySelector('scissor')

const handler = (e)=>{
    console.log("e.target.id")

switch (action) {
    case "rock":
        board.innerHTML ="Rock crushes scissors"
        break;
    case "paper":
        board.innerHTML ="Paper traps Rock"
        break;
    case "scissor":
        board.innerHTML ="Scissor cuts paper"
        break;
    default:
        board.innerHTML =Click Something"
        break;
}






}
rock.addEventListener("click",handler("rock"))
paper.addEventListener("click",handler("paper"))
scissor.addEventListener("click",handler("scissor"))


