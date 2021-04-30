// Write your code here!
// main.remove(main);

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';

newHeader.innerHTML = "Megan is the champion";

function removeMain() {
    let mainElement = document.getElementById('main');
    mainElement.remove(main)
}

removeMain();