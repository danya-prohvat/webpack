export const btnHandler = () => {
    const btn = document.querySelector('.btn');
    // btn.innerHTML = 'sdfsd'
    btn.addEventListener('click', () => {
        alert('button was clicked')
    })
}

