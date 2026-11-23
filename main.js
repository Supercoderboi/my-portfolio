const age = document.getElementById("age");
const birthDate = new Date(2011,11,27);

//wow that was a pain in the ahh to write, youd exxpect a simple age finding thing to be js a few lines lol
function updateAge() {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let cursor = new Date(birthDate);
    cursor.setFullYear(cursor.getFullYear() - years);
    if(cursor > now) {
        years-=1;
        cursor.setFullYear(cursor.getFullYear() -1);
    }

    let months = (now.getFullYear() - cursor.getFullYear()) * 12 + now.getMonth() - cursor.getMonth();
    let monthMark = new Date(cursor);
    monthMark.setMonth(monthMark.getMonth() + months);

    if(monthMark > now){
        months -=1;
        monthMark = new Date(cursor);
        monthMark.setMonth(monthMark.getMonth() + months);

    }

    let days = 0;
    let dayCursor = new Date(monthMark);
    while(true){
        const next = new Date(monthMark);
        next.setDate(next.getDate() +1);
        if(next>now) break;
        dayCursor = next;
        days+=1;
    }
    let elapsed = now - dayCursor;
    const hours = Math.floor(elapsed/3600000);
    elapsed %= 3600000;

    const minutes = Math.floor(elapsed/60000);
    elapsed%=60000;

    const seconds = Math.floor(elapsed/1000);
    
    age.textContent = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`


}

// updateAge();
// setInterval(updateAge,1000);