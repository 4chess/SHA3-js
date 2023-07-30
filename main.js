document.getElementById('hashForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let text = document.getElementById('textInput').value;
    text = DOMPurify.sanitize(text);
    const hashType = document.querySelector('input[name="hashType"]:checked').value;
    const hash = generateHash(hashType, text);
    document.getElementById('hashOutput').innerText = hash;
});

function generateHash(hashType, input) {
    const shaObj = new jsSHA(hashType, "TEXT");
    shaObj.update(input);
    const hash = shaObj.getHash("HEX");
    return hash;
}
