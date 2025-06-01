function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}
timer(2000, (message) => {
    console.log(message);  // After 2 seconds, it prints: Timer of 2000 ms finished
});