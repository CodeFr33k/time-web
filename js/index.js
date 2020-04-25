import('../pkg/index.js').catch(console.error);

function getDayOfYear(year, month, dayOfMonth){
    const seconds = (
        Date.UTC(year, month, dayOfMonth) - 
        Date.UTC(year, 0, 0)
    );
    return seconds / 24 / 60 / 60 / 1000;
}

function twoDigit(num) {
    return ('0'+num).slice(-2)
}

function setTime() {
    const now = new Date();
    const dayLocal = getDayOfYear(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
    ); 
    const dayUTC = getDayOfYear(
        now.getFullYear(),
        now.getMonth(),
        now.getUTCDate(),
    ); 
    const local = (
        dayLocal + '日 ' +
        twoDigit(now.getHours() % 12) + ':' +
        twoDigit(now.getMinutes()) + ':' +
        twoDigit(now.getSeconds()) 
    );
    const utc = (
        dayUTC + '日 ' + 
        twoDigit(now.getUTCHours()) + ':' +
        twoDigit(now.getUTCMinutes()) + ':' +
        twoDigit(now.getUTCSeconds()) +
        'Z'
    );
    const div1 = document.createElement('div');
    div1.innerText = local;
    const div2= document.createElement('div');
    div2.innerText = utc;
    const box = document.createElement('div');
    box.className = 'time-box';
    box.appendChild(div1);
    box.appendChild(div2);
    document.body.innerHTML = '';
    document.body.appendChild(box);
}

setInterval(setTime, 1000);
setTime();
