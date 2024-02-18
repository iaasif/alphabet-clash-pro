function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = 
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(alphabets);
    // console.log(index);

    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;

}

function play() {
    // console.log("object");
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add("hidden");
    // console.log(homeSection.classList);
    const playgroundSection = document.getElementById('playground-secition');
    playgroundSection.classList.remove('hidden');
    // console.log("object");


    continueGame();

}

function removeBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function handleKeyboardKeyUpEvent(event) {

    const playerPressed = event.key
    // console.log('player pressed ', playerPressed);


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed == expectedAlphabet) {
        console.log("you win ");

        // update score 
        // start a new round

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        removeBackgroundById(expectedAlphabet);
        continueGame();
    }

    else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLifetext = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifetext);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent);



function continueGame() {
    const alphabet = getARandomAlphabet()
    console.log('your new alpha is: ' + alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    setBackgroundColorById(alphabet);
}

function setBackgroundColorById(elemnetId) {
    const element = document.getElementById(elemnetId);
    element.classList.add('bg-orange-400');

}

// continueGame()



