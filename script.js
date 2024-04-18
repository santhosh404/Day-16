//Callback hell

const callback = document.getElementById('callback');
const img = document.getElementById('img');
const output = document.getElementById('output');
const heading = document.getElementById('heading');

setTimeout(() => {
    callback.innerText = "10";
    setTimeout(() => {
        callback.innerText = "09";
        setTimeout(() => {
            callback.innerText = "08";
            setTimeout(() => {
                callback.innerText = "07";
                setTimeout(() => {
                    callback.innerText = "06";
                    setTimeout(() => {
                        callback.innerText = "05";
                        setTimeout(() => {
                            callback.innerText = "04"
                            setTimeout(() => {
                                callback.innerText = "03"
                                setTimeout(() => {
                                    callback.innerText = "02"
                                    setTimeout(() => {
                                        callback.innerText = "01"
                                        setTimeout(() => {
                                            // callback.innerText = "Happy Independance Day";
                                            heading.classList.remove('mb-5')
                                            callback.style.display = 'none';
                                            output.classList.add('is-visible')
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 100)