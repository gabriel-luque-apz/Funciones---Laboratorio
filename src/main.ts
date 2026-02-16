import "./style.css";

const turn = document.querySelector('.numero-turno') as HTMLElement;
const changeNumber = document.querySelector('.box_number') as HTMLInputElement;
const btnNext = document.querySelector('.next') as HTMLButtonElement;
const btnPrevious = document.querySelector('.previous') as HTMLButtonElement;
const btnReset = document.querySelector('.reset') as HTMLButtonElement;
const btnChange = document.querySelector('.change') as HTMLButtonElement;

btnNext.addEventListener('click', () => {
    increase(turn)
});

btnPrevious.addEventListener('click', () => {
    decrease(turn);
});

btnReset.addEventListener('click', () =>{
    reset(turn);
});

btnChange.addEventListener('click', () =>{
    changeTurn(turn, changeNumber);
    changeNumber.value = ""
});

const increase  = (turn: HTMLElement): string => {
    let currentTurn = Number(turn.innerText);
    const newTurn = currentTurn + 1;
   
    return turn.innerText = newTurn.toString().padStart(2,'0');
    
};

const decrease = (turn: HTMLElement): string => {
    let currentTurn = Number(turn.innerText);
    const newTurn = currentTurn - 1;

    if( currentTurn <= 0 ) return turn.innerText;

    return turn.innerText = newTurn.toString().padStart(2,'0');
};

const reset = (turn: HTMLElement): string => {
    return turn.innerText = '00'
};

const changeTurn = (turn: HTMLElement, change: HTMLInputElement): string => {
    const changeValue = Number(change.value);
    if(changeValue < 0) return turn.innerText;

    return turn.innerText = change.value.padStart(2,"0");
}