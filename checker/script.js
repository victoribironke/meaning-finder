let myArray;

const words = {}

fetch('Proj/words.txt')
    .then(res => {return res.text()})
    .then(data => {
        myArray = data.split('\n')
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] in words) {
                words[myArray[i]] += 1;
            } else {
                words[myArray[i]] = 1;
            };
        };

        for (let prop in words) {
            if (words[prop] !== 1) {
                console.log(prop);
            }
        }
        // console.log(words)
    })
    .catch(e => console.log(e));





