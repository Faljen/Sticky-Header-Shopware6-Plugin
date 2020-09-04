import Plugin from 'src/plugin-system/plugin.class';

export default class StickyHeader extends Plugin {

    init() {
        console.log('Welcome in the Sticky-Header Plugin! :)');
        this.createElement();
        this.addEventListeners();
    }

    createElement() {
        this.copiedNavigation = this.el.cloneNode(true);
        this.copiedNavigation.removeAttribute('id');
        this.copiedNavigation.classList.add('js-sticky-header');
        document.body.appendChild(this.copiedNavigation);
    }

    addEventListeners() {
        document.removeEventListener('scroll', this.onScroll.bind(this));
        document.addEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll() {
        const scrollPosition = document.documentElement.scrollTop;

        if (scrollPosition > 100) {
            this.copiedNavigation.classList.add('is--active');
        } else {
            this.copiedNavigation.classList.remove('is--active');
        }

    }

}
