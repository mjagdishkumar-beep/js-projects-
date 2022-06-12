document.getElementById('filterInput').addEventListener('keyup',  e => {
    let filterValue = document.getElementById('filterInput').value 
    toLowerCase();
    let ul = document.getElementById('names');
    let li = ul.quarySelectorAll('li.collection-items');
    let liHeader = ul.quarySelectorAll('li.collection-header');
    li.forEach(item => {
        let a = item.getElementByTagName('a')[0];
        item.style.display = a.innerText.toLowerCase().startswith
        (filterValue) ? 'block' : 'none';
    })

    liHeader.forEach(item => {
        let h5 = item.getElementsByTagname('h5')[0];
        item.style.display = h5.innerText.toLowerCase().startswith
        (filterValue.substrig(0, 1)) ? 'block' : 'none';
    })
})    