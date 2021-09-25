const countdown = () => {
    const countDate = new Date("September 26, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = countDate - now;


    const sec = 1000;
    const min = sec * 60;
    const hr = min * 60;
    
    // Countdown calculations
    const hour = Math.floor(timeLeft / hr);
    const minute = Math.floor((timeLeft % hr) / min );
    const second = Math.floor((timeLeft % min) / sec);

    // display 
    document.querySelector('.hour').innerHTML = hour + ":";
    document.querySelector('.min').textContent = minute + ":";
    document.querySelector('.sec').textContent = second;
}

