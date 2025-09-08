const section = document.getElementById('flex_section');
const project = 5;
for(i=1; i<1+project;i++) {
    const tekstDiv = `<a href="https://romaniukd.github.io/Project-0${i}/"><div class="flex_div button"><h2>Project 0${i}</h2></div>`
    section.innerHTML += tekstDiv
}


