'use strict';

const tabs = (swiper) => {
    const tabsBtn = document.querySelectorAll('[data-tab]');
    const tabsArticle = document.querySelectorAll('[data-tab-value]');
    for (let btn of tabsBtn) {
        btn.addEventListener('click', (event) => {
            /* cansell class */
            for (let btn of tabsBtn) {
                btn.classList.remove('tabs-controls_btn--active');
            }
            /* add class */
            event.target.classList.add('tabs-controls_btn--active');
            /* check data-tab */
            for (let tab of tabsArticle) {
                /* show click tabs - article */
                if (tab.dataset.tabValue === event.target.getAttribute('data-tab')) {
                    tab.classList.remove('none');
                } else {
                    /* cancell all tabs article */
                    tab.classList.add('none');
                }
            }
            swiper.update();
        });
    }
};

export { tabs };
