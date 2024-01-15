const qoute = document.getElementById('qoute' );
const btn = document.getElementById('btn');
const img_rndm = document.getElementById('img_rndm');

const randomQuote= ()=> {
 fetch ('https://api.quotable.io/random')
    .then((resp) => resp.json())
    .then((data) => {
        qoute.innerHTML =  data.content;  }
 )
 fetch ('https://api.thecatapi.com/v1/images/search')
 .then((resp) => resp.json())
 .then(json => img_rndm.src = json[0].url
)
    }

btn.addEventListener('click', randomQuote)