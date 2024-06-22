import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdown-menu.js"
import initMenuMobile from "./modules/menu-mobile.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import SlideNav from './modules/slide.js';

initAnimacaoScroll()
initScrollSuave()
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchAnimais();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');