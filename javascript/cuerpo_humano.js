const cuerpoHumanojs = document.getElementById('cuerpoHumano');
const tooltip = document.getElementById('tooltip');

cuerpoHumanojs.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.id) {
        tooltip.innerHTML = `${target.id}`;
        tooltip.style.display = 'block';
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.left = `${e.clientX}px`;
    }
});

cuerpoHumanojs.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});

cuerpoHumanojs.addEventListener('click', (e) => {
    const target = e.target;
    if (target.id) {
        alert(`${target.id}`);
    }
});