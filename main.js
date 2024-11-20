const word = document.getElementById('word');
const meaning = document.getElementById('meaning');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const show = document.getElementById('show');
const result = document.getElementById('result');
const show_meaning = document.getElementById('show_meaning');

let word_arr = ['saumya' , 'het'];
let meaning_arr = ['soni' , 'patel'];

var i = Math.floor(Math.random() * meaning_arr.length);
word.innerHTML = word_arr[i];

submit.addEventListener("click",() =>{
    if(meaning_arr[i] == meaning.value)
    {
        result.innerHTML = 'Answer is right';
    }
    else{
        result.innerHTML = 'Answer is wrong';
    }
});

reset.addEventListener("click", () => {
    location.reload();
});

show.addEventListener("click", () => {
    show_meaning.innerHTML = meaning_arr[i];
});


