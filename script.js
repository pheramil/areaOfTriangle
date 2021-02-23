document.getElementById('submitButton').addEventListener('click', areaOfTri());

function areaOfTri() {
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let result = (base * height) / 2;
    
    document.getElementById('prompt').textContent = `The area of your triangle is ${result}`;
}

