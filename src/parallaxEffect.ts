export function parallaxEffect() {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
    });

    const elementsOffsets =
        document.querySelectorAll<HTMLElement>('[parallaxOffset]');

    const setOffsets = () => {
        elementsOffsets.forEach((element) => {
            element.style.setProperty(
                '--parallaxOffset',
                `${element.offsetTop}px`
            );
        });
    };
    window.addEventListener('resize', () => setOffsets());
    setOffsets();
}
