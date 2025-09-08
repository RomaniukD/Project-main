const section = document.getElementById('flex_section');
const project = 5;
for(i=1; i<1+project;i++) {
    const tekstDiv = `<div class="flex_div"><a href="https://romaniukd.github.io/Project-0${i}/"><h2>Project 0${i}</h2></a></div>`
    section.innerHTML += tekstDiv

}
