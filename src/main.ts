import './style.css';
import { heroAnimation } from './heroAnimation.ts';
import { buttonsAnimation } from './buttonsAnimation.ts';

const hero = document.querySelector('#hero');

if (hero != null) {
    heroAnimation(hero);
}

const buttons = document.querySelectorAll(
    '.button__animation'
) as NodeListOf<HTMLElement>;

if (hero != null) {
    buttonsAnimation(buttons);
}
