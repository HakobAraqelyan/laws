const root = document.querySelector("#root");

const allPageDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const advertisementDivL = document.createElement('div');
const advertisementDivR = document.createElement('div');
const searchDiv = document.createElement('div');


allPageDiv.id = ('allPageDivId');
menuDiv.id = ('menuDiv');
advertisementDivL.id = ('advertisementDivL');
searchDiv.id = ('searchDiv');
advertisementDivR.id = ('advertisementDivR');


allPageDiv.appendChild(menuDiv);
allPageDiv.appendChild(advertisementDivL);
allPageDiv.appendChild(advertisementDivR);
allPageDiv.appendChild(searchDiv);

root.appendChild(allPageDiv);


export default root;