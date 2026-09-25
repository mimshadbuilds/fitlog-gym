export const getLogs = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const log = await res.json();
    
    if(!log) {
        return `no data to fetch!`;
    }

    return log;
}