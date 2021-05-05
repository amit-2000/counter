let count =0;

let value = document.getElementById('value');

let btns = document.querySelectorAll('.btns');

btns.forEach(function (button) {
    button.addEventListener("click", function (elements) {
        const styles = elements.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }
        
        value.textContent = count;
    });
})

// btns.addEventListener()

