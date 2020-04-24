import('../pkg/index.js').catch(console.error);

function setTime() {
    const now = new Date();
    const local = Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        hourCycle: 'h24',
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
    document.body.innerText = local + ' ' + utc + 'Z';
}

setInterval(setTime, 1000);
setTime();
