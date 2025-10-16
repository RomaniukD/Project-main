const section = document.getElementById('flex_section');
const project = 30;

for (let i = 1; i <= project; i++) {
    // Pad numbers less than 10 with a leading 0
    let padded = i < 10 ? `0${i}` : `${i}`;

    const tekstDiv = `
        <a href="https://romaniukd.github.io/Project-${padded}/">
            <div class="flex_div button">
                <h2>Project ${padded}</h2>
            </div>
        </a>
    `;

    section.innerHTML += tekstDiv;
}


