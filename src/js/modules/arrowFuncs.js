const arrowF = () => {
    
    console.log('+');

    (async function adsad() {
        await new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
        console.log('async/await work');
    })()
}

export default arrowF;