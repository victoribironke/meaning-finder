const menu = document.getElementById('menu');
const abbr = document.getElementById('I');
const button = document.getElementById('second');
const description = document.getElementById('II');
const words = document.getElementById('words');
const submit = document.getElementById('submit');
const letters = document.getElementsByClassName('letter');
const newLetters = document.getElementsByClassName('letter1');
letters[1].style.borderBottom = '3px solid green';
let myArray;

fetch('http://finder.byethost13.com/words.txt')
    .then(res => {return res.text()})
    .then(data => {
        myArray = data.split('\n');
        showWord();
    })
    .catch(e => console.log(e));

function sendMail() {
    Email.send({
        SecureToken : '7304b294-e188-4b00-a58e-a938715b56e0',
        To : 'ibironkevictor05@gmail.com',
        From : 'ibironkevictor05@gmail.com',
        Subject : 'New Word On Your Website!',
        Body : `${abbr.value}: ${description.value}`
    }).then(message => console.log(message));
};

button.addEventListener('click', () => {
    sendMail();
    abbr.value = '';
    description.value = '';
});

function loopAndGetWords(div) {
    for (let i = 0; i < letters.length; i++) {
        letters[i].style.borderBottom = '0px solid green';
        newLetters[i].style.borderBottom = '0px solid green';
    };

    div.style.borderBottom = '3px solid green';
    words.innerHTML = '';
    let myArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    for (let i = 0; i < myArray.length; i++) {
        if (div.innerText !== '#') {
            if (div.innerText === myArray[i][0]) {
                const word = document.createElement('p');
                word.innerText = myArray[i];
                words.appendChild(word);
            };
        } else {
            if (!myArr.includes(myArray[i][0])) {
                const word = document.createElement('p');
                word.innerText = myArray[i];
                words.appendChild(word);
            };
        };
    };
};

function showWord() {
    for (let i = 0; i < myArray.length; i++) {
        if (letters[1].innerText === myArray[i][0]) {
            const word = document.createElement('p');
            word.innerText = myArray[i];
            words.appendChild(word);
        };
    };
};

letters[0].addEventListener('click', () => loopAndGetWords(letters[0]));
letters[1].addEventListener('click', () => loopAndGetWords(letters[1]));
letters[2].addEventListener('click', () => loopAndGetWords(letters[2]));
letters[3].addEventListener('click', () => loopAndGetWords(letters[3]));
letters[4].addEventListener('click', () => loopAndGetWords(letters[4]));
letters[5].addEventListener('click', () => loopAndGetWords(letters[5]));
letters[6].addEventListener('click', () => loopAndGetWords(letters[6]));
letters[7].addEventListener('click', () => loopAndGetWords(letters[7]));
letters[8].addEventListener('click', () => loopAndGetWords(letters[8]));
letters[8].addEventListener('click', () => loopAndGetWords(letters[8]));
letters[9].addEventListener('click', () => loopAndGetWords(letters[9]));
letters[10].addEventListener('click', () => loopAndGetWords(letters[10]));
letters[11].addEventListener('click', () => loopAndGetWords(letters[11]));
letters[12].addEventListener('click', () => loopAndGetWords(letters[12]));
letters[13].addEventListener('click', () => loopAndGetWords(letters[13]));
letters[14].addEventListener('click', () => loopAndGetWords(letters[14]));
letters[15].addEventListener('click', () => loopAndGetWords(letters[15]));
letters[16].addEventListener('click', () => loopAndGetWords(letters[16]));
letters[17].addEventListener('click', () => loopAndGetWords(letters[17]));
letters[18].addEventListener('click', () => loopAndGetWords(letters[18]));
letters[19].addEventListener('click', () => loopAndGetWords(letters[19]));
letters[20].addEventListener('click', () => loopAndGetWords(letters[20]));
letters[21].addEventListener('click', () => loopAndGetWords(letters[21]));
letters[22].addEventListener('click', () => loopAndGetWords(letters[22]));
letters[23].addEventListener('click', () => loopAndGetWords(letters[23]));
letters[24].addEventListener('click', () => loopAndGetWords(letters[24]));
letters[25].addEventListener('click', () => loopAndGetWords(letters[25]));
letters[26].addEventListener('click', () => loopAndGetWords(letters[26]));

newLetters[0].addEventListener('click', () => loopAndGetWords(letters[0]));
newLetters[1].addEventListener('click', () => loopAndGetWords(letters[1]));
newLetters[2].addEventListener('click', () => loopAndGetWords(letters[2]));
newLetters[3].addEventListener('click', () => loopAndGetWords(letters[3]));
newLetters[4].addEventListener('click', () => loopAndGetWords(letters[4]));
newLetters[5].addEventListener('click', () => loopAndGetWords(letters[5]));
newLetters[6].addEventListener('click', () => loopAndGetWords(letters[6]));
newLetters[7].addEventListener('click', () => loopAndGetWords(letters[7]));
newLetters[8].addEventListener('click', () => loopAndGetWords(letters[8]));
newLetters[8].addEventListener('click', () => loopAndGetWords(letters[8]));
newLetters[9].addEventListener('click', () => loopAndGetWords(letters[9]));
newLetters[10].addEventListener('click', () => loopAndGetWords(letters[10]));
newLetters[11].addEventListener('click', () => loopAndGetWords(letters[11]));
newLetters[12].addEventListener('click', () => loopAndGetWords(letters[12]));
newLetters[13].addEventListener('click', () => loopAndGetWords(letters[13]));
newLetters[14].addEventListener('click', () => loopAndGetWords(letters[14]));
newLetters[15].addEventListener('click', () => loopAndGetWords(letters[15]));
newLetters[16].addEventListener('click', () => loopAndGetWords(letters[16]));
newLetters[17].addEventListener('click', () => loopAndGetWords(letters[17]));
newLetters[18].addEventListener('click', () => loopAndGetWords(letters[18]));
newLetters[19].addEventListener('click', () => loopAndGetWords(letters[19]));
newLetters[20].addEventListener('click', () => loopAndGetWords(letters[20]));
newLetters[21].addEventListener('click', () => loopAndGetWords(letters[21]));
newLetters[22].addEventListener('click', () => loopAndGetWords(letters[22]));
newLetters[23].addEventListener('click', () => loopAndGetWords(letters[23]));
newLetters[24].addEventListener('click', () => loopAndGetWords(letters[24]));
newLetters[25].addEventListener('click', () => loopAndGetWords(letters[25]));
newLetters[26].addEventListener('click', () => loopAndGetWords(letters[26]));