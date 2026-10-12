const menuHTML = `
<aside class="sidebar">
    <div class="sidebar-header">
        <!-- Иконка бургер-меню рядом с названием -->
        <h2>Мой сайт</h2>
    </div>
    <nav class="sidebar-nav">
        <a href="index.html" class="nav-item"><span class="menu-icon">&#8962;</span> Главная</a>
        
        <a href="page2.html" class="nav-item"><span class="menu-icon">&#9783;</span> Таблицы</a>
        
        <a href="page3.html" class="nav-item"><span class="menu-icon">&#9745;</span> Элементы</a>
        
        <a href="page4.html" class="nav-item"><span class="menu-icon">&#9998;</span> Анкета</a>
        
        <a href="page5.html" class="nav-item"><span class="menu-icon">&#10022;</span> Стили</a>
        
        <a href="page6.html" class="nav-item"><span class="menu-icon">&#9881;</span> Практика №5</a>
        
        <a href="page7.html" class="nav-item"><span class="menu-icon">&#9874;</span> практика №9</a>
        
        <a href="page8.html" class="nav-item"><span class="menu-icon">&#9874;</span> практика №9 последнее задание</a>
    </nav>
</aside>
`;


document.addEventListener('DOMContentLoaded', () => {

    document.body.insertAdjacentHTML('afterbegin', menuHTML);


    let currentPath = window.location.pathname.split('/').pop();
    

    if (currentPath === '') {
        currentPath = 'index.html';
    }


    const navItems = document.querySelectorAll('.nav-item');


    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPath) {
            item.classList.add('active');
        }
    });
});