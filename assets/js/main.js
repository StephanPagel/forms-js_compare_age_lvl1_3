let inputAge1 = document.getElementById("input_age_1");
let inputAge2 = document.getElementById("input_age_2");
let output = document.getElementById("form_output");

function ageDifference() {
    let diff = inputAge1.value - inputAge2.value;
    output.innerHTML = diff;
}