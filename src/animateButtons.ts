export function animateButtons(elements: NodeListOf<HTMLElement>) {
    elements.forEach((element) => {
        element.addEventListener('pointermove', (e) => {
            const rect = element.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            element.style.setProperty('--left', `${offsetX}px`);
            element.style.setProperty('--top', `${offsetY}px`);
        });
    });
}
