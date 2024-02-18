

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

function continueGame() {
    const alphabet = getARandomAlphabet()
    console.log('your new alpha is' + alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    setBackgroundColorById(alphabet); 
}

function setBackgroundColorById(elemnetId) {
    const element = document.getElementById(elemnetId);
    element.classList.add('bg-orange-400');

}

// continueGame()



