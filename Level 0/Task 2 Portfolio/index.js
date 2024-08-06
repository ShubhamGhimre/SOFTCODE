const bar = document.getElementById('bars');

const close = document.getElementById('close');

const menu = document.getElementById('menu');


if(bar){
    bar.addEventListener('click', () => {
        console.log('clicked');
    
            menu.style.right = '0%';
        
    });
}

if(close){
    close.addEventListener('click', () => {
        console.log('clicked');
    
            menu.style.right = '-100%';
        
    });
}

// slider 

const cards = document.querySelectorAll('.cards');
const leftarrow = document.getElementById('left');
const rightarrow = document.getElementById('right');

leftarrow.addEventListener("click" , () => {
    cards.forEach(card => {
        const last = card.lastElementChild;
        card.insertBefore(last , card.firstElementChild);

    })
})
rightarrow.addEventListener("click" , () => {
    console.log('clicked');
    cards.forEach(card => {
        const first = card.firstElementChild;
        card.appendChild(first);
    })
})