function hiddenElemeent(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function shuwElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function setcolorElementAdd(elementId){
    const element =document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function setcolorElementRomove(elementId){
    const element =document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value =parseInt(elementValueText);
    return value
}
function setTextElementValueById(elementId, value){
    const element =document.getElementById(elementId);
    element.innerText =value;
}
function getElementTextById(elementId){
    const element =document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)
         const alphabet= alphabets[index]
         return alphabet

}