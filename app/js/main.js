window.onload = function () {
    const tabItem = document.querySelectorAll('.tabs__btn');
    const tabContent = document.querySelectorAll('.tabs__content-item');

    const open = (e) => {
        const tabTarget = e.currentTarget;
        const button = tabTarget.dataset.button;
        tabItem.forEach(item => {
            item.classList.remove('tabs__btn--active');
        });
        tabContent.forEach(item => {
            item.classList.remove('tabs__content-item--active');
        });
        tabTarget.classList.add('tabs__btn--active');
        document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
    };

    tabItem.forEach(item => {
        item.addEventListener('click', open);
    });

    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', ()=>{
        menu.classList.toggle('menu--active');
    });
};