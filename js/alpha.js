

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    console.log(alphabets);
    console.log(index);
}

function play() {
    console.log("object");
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add("hidden");
    // console.log(homeSection.classList);
    const playgroundSection = document.getElementById('playground-secition');
    playgroundSection.classList.remove('hidden');
    console.log("object");


    continueGame();  

}

function continueGame() {
    const alphabet = getARandomAlphabet()
    console.log(alphabet);
}


// continueGame()



