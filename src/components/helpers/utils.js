const debounce = (callback, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        };
        timeoutId = setTimeout(()=>{
            callback.apply(null, args);
        }, delay);
    };
};

const milsToMins = millis => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (seconds === 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
}

const numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { debounce, milsToMins, numberWithCommas };
