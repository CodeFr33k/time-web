import('../pkg/index.js').catch(console.error);

function setTime() {
    const now = new Date();
    const local = Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hourCycle: 'h11',
        minute: '2-digit',
        second: '2-digit',        
    }).format(now);
    const utc = Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        hourCycle: 'h24',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
    }).format(now);
    const div1 = document.createElement('div');
    div1.innerText = local;
    const div2= document.createElement('div');
    div2.innerText = utc + ' Z';
    const box = document.createElement('div');
    box.className = 'time-box';
    box.appendChild(div1);
    box.appendChild(div2);
    document.body.innerHTML = '';
    document.body.appendChild(box);
}

setInterval(setTime, 1000);
setTime();
