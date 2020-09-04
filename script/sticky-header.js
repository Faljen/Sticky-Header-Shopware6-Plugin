import Plugin from 'src/plugin-system/plugin.class';

export default class StickyHeader extends Plugin {

    static options =
        {
            clonedElementClass: 'js-sticky-header',
            scrollPositionValue: 100

        }

    init() {
        console.log('Welcome in the Sticky-Header Plugin! :)');
        this.PluginManager = window.PluginManager;
        this.createElement();
        this.addEventListeners();
        this.reinitializePlugin();
    }

    createElement() {
        this.copiedNavigation = this.el.cloneNode(true);
        this.copiedNavigation.removeAttribute('id');
        this.copiedNavigation.classList.add(this.options.clonedElementClass);
        document.body.appendChild(this.copiedNavigation);
    }

    addEventListeners() {
        document.removeEventListener('scroll', this.onScroll.bind(this));
        document.addEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll() {
        const scrollPosition = document.documentElement.scrollTop;

        if (scrollPosition > this.options.scrollPositionValue) {
            if (!this.copiedNavigation.classList.contains('is--active')) {
                this.copiedNavigation.classList.add('is--active');
            }
        } else {
            this.copiedNavigation.classList.remove('is--active');
        }

    }

    reinitializePlugin() {
        this.PluginManager.initializePlugin(
            'FlyoutMenu',
            '[data-flyout-menu="true"]',
            {}

        )
    }

}
