function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; 
    const year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month, day);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age < 0) {
        document.getElementById("result").innerText = "Please enter a valid birth date.";
    } else {
        document.getElementById("result").innerText = `Your age is ${age} years.`;
    }
}
