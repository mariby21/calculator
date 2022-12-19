(function() {
    let inputField = document.querySelector(".input-field ");
    let buttons = document.querySelectorAll(".btn");
    let btnClear = document.querySelector(".btn-clear");
    let btnEqual = document.querySelector(".btn-equals");
    buttons.forEach(function(b) {
        b.addEventListener("click", function(e) {
            let target = e.target.dataset.num;
            inputField.value += target;
        });
    });
    btnEqual.addEventListener("click", function(e) {
        if (inputField.value === "") inputField.value = "Please Enter";
        else {
            let sum = eval(inputField.value);
            inputField.value = sum;
        }
    });
    btnClear.addEventListener("click", function(e) {
        inputField.value = "";
    });
})();

//# sourceMappingURL=index.7c0ccee6.js.map
