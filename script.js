const boxes = document.querySelectorAll('.box');
const boxRow = document.querySelector('.box-row');

boxRow.addEventListener('mouseover', function(e) {
    const link = e.target.closest('.box');
    if(!link) return 
    boxes.forEach(el => el.classList.add('blur'));
    link.classList.remove('blur');
})

boxRow.addEventListener('mouseout', function(e) {
    boxes.forEach(el => el.classList.remove('blur'));
})