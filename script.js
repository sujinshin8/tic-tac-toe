let playerOne = 'X' 
let playerTwo = 'O'
let count = 1

const elements = [['top-left'], ['top-middle'], ['top-right'] , ['middle-left'], ['middle-middle'], ['middle-right'] , ['bottom-left'] , ['bottom-middle'] , ['bottom-right']]

const getHorizontalRowWinner = (letter, lowerLimit, upperLimit) => {
    for (let i = lowerLimit; i < upperLimit; i++){
        let element = document.getElementById(elements[i])
        const innerText = element.textContent;
        if (innerText !== letter){
            return
        }
    }
    let declareWinnerEl = document.getElementById('declare-winner')
    declareWinnerEl.textContent = `GAME OVER. Player ${letter} is the winner!!!`
    return console.log('player ', letter, ' wins')
}

function handleClick() {
    if (count % 2 === 0) {
        this.textContent = 'O';
    } else {
        this.textContent = 'X';
    }
    count++;
    getHorizontalRowWinner('X', 0, 3)
    getHorizontalRowWinner('O',0,3)
    getHorizontalRowWinner('X', 3, 6)
    getHorizontalRowWinner('O',3,6)
    getHorizontalRowWinner('X', 6, 9)
    getHorizontalRowWinner('O',6,9)
}

for (let i=0; i < elements.length; i++){
    document.getElementById(elements[i]).addEventListener('click', handleClick);
}
