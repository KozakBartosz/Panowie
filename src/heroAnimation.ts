export function heroAnimation(element: Element) {
    window.addEventListener('scroll', (e) => {
        document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
    });
}
