import './style.css';
import { parallaxEffect } from './parallaxEffect.ts';
import { animateButtons } from './animateButtons.ts';

parallaxEffect();

// watchCursorLocalPosition
const buttons = document.querySelectorAll<HTMLElement>('[animateButton]');
animateButtons(buttons);
