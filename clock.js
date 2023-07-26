setInterval(() => {
    // DD/MM/YYYY
    const time = new Date();
    const dd = time.toDateString();
    document.getElementById("dd").innerHTML = dd;

    // HH/MM/SS (creates the time)
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;

    // DAY - MONTH (MM/YYYY)
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
}, 1);