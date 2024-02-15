// function play(){
//     // home screen hidden 
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // show the play ground 
//     const playSection = document.getElementById('play-ground')
//     playSection.classList.remove('hidden')
// }

function handleKeyBoardButtonPress(event){
    const playerPressed =event.key;
    console.log('player pressed', playerPressed)
    // stop the game  

    if(playerPressed==='Escape'){
        gameOver();
    }
    // get the expected to press 

const currentAlphabetElement =document.getElementById('current-alphabet')
const currentAlphabet =currentAlphabetElement.innerText;
const expectedAlphabet =currentAlphabet.toLowerCase();
console.log(playerPressed,expectedAlphabet);
// cheaked matched or not 

if(playerPressed=== expectedAlphabet){
    console.log('you get a point');
    const currentScore = getTextElementById('current-score')
    const updatedScore = currentScore +1;
    setTextElementValueById('current-score',updatedScore)




    // ----------------- 
    // update score: 
    // 1. get the current score 
    // 2.increase the score by 1 
    // 3. show the update score 
    // const currentScorElement =document.getElementById('current-score');
    // const currentScoreText = currentScorElement.innerText;
    // const currentScore =parseInt(currentScoreText);
    // console.log(currentScore);
    // const newScore = currentScore + 1;
    // currentScorElement.innerText = newScore;
    



    console.log('you have pressed correctly',expectedAlphabet);
    setcolorElementRomove(expectedAlphabet);

    continueGame();
}else{
    console.log('you missed. you lost a life');
    const currentlife = getTextElementById('current-life');
    const updatedLife = currentlife -1;
    setTextElementValueById('current-life',updatedLife);

 
if(updatedLife === 0){
    gameOver();
}
   

    // const currentLifeElement = document.getElementById('current-life')
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLifeSore =parseInt(currentLifeText);
    // const newLife =currentLifeSore - 1;
    // currentLifeElement.innerText = newLife;
}

}

document.addEventListener('keyup', handleKeyBoardButtonPress);

function continueGame(){
    const alphabet = getRandomAlphabet();
    // console.log(alphabet)
    const currentAlphabet =document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet

    setcolorElementAdd(alphabet)
}

function play(){
    hiddenElemeent('home-screen');
    hiddenElemeent('final-score');
    shuwElement('play-ground');

    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame();
}
function gameOver(){
hiddenElemeent('play-ground');
shuwElement('final-score')
// update final score 
const lastScore = getTextElementById('current-score')
console.log(lastScore)
setTextElementValueById('last-score',lastScore)

const currentAlphabet =getElementTextById('current-alphabet');
console.log(currentAlphabet);
setcolorElementRomove(currentAlphabet);
}