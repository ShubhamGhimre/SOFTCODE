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