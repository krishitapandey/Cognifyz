//to change the colour of button when clicked 
const button = document.getElementById('colour_change')
button.addEventListener("click", function() {

    button.classList.toggle('clicked');

});

// to display the alert message according to time 
const current_hour = new Date().getHours();
console.log(current_hour);
const greeting = () => {
    if (current_hour < 12) {
        console.log(alert(" Hello , Goodmorning"))
    } else if (current_hour < 18) {
        console.log(alert(" Hello , Goodafternoon!"))
    } else {
        console.log(alert(" Hello , Goodevening!"))
    }
}


// to add two number 
document.addEventListener('DOMContentLoaded', function() {

    console.log('DOM content loaded');
    const button2 = document.getElementById('cal');
    console.log('Button element:', button2);
    if (button2) {
        button2.addEventListener('click', function() {
            console.log('Button clicked');
            const result = document.getElementById('output');
            const num1 = parseFloat(document.getElementById('number1').value);
            const num2 = parseFloat(document.getElementById('number2').value);

            if (!isNaN(num1) && !isNaN(num2)) {
                const sum = num1 + num2;
                result.value = sum;
            } else {
                alert('Please enter valid numbers');
            }
        });
    } else {
        console.error('Button element not found');
    }
});
greeting();