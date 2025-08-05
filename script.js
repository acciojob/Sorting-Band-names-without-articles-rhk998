//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];   
const sortedTours = touristSpots.sort((a, b) => {
  const cleanA = a.replace(/^(a|an|the)\s/i, '');
  const cleanB = b.replace(/^(a|an|the)\s/i, '');
  return cleanA.localeCompare(cleanB);
});

const ul = document.createElement('ul');
ul.id = 'band'; 

sortedTours.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

document.body.appendChild(ul);