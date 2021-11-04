const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');
const digits = Array.from({ length: 40 }, () => [randomNumber(4), randomNumber(4)]).concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
]);





//function
function generateHtml([h, v]) {
    return `<div class="item h${h} v${v}">
       <div class="item__overlay">
          <button>View -></button>
         </div>
         <img src ="images/${randomNumber(12)}.1.png" alt="${randomNumber(12)}">
       </div>`
};

function randomNumber(limit) {
    return Math.floor(Math.random() * limit + 1);
}
const html = digits.map(generateHtml).join('');
gallery.innerHTML = html;
// console.log(html)

const items = document.querySelectorAll('.item');


// Adding eventListener
items.forEach(item => item.addEventListener('click', handleClick));
overlay.addEventListener('click', close);

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove('open');
}



//  const digit = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]);