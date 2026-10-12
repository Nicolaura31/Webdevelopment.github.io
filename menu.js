const menuHTML = `
<aside class="sidebar">
    <div class="sidebar-header">
        <!-- Иконка бургер-меню рядом с названием -->
        <h2>Мой сайт</h2>
    </div>
    <nav class="sidebar-nav">
        <!-- &#8962; - это символ домика (Главная) -->
        <a href="index.html" class="nav-item"><span class="menu-icon">&#8962;</span> Главная</a>
        
        <!-- &#9783; - символ, похожий на таблицу -->
        <a href="page2.html" class="nav-item"><span class="menu-icon">&#9783;</span> Таблицы</a>
        
        <!-- &#9745; - символ галочки в квадратике (для переключателей и флажков) -->
        <a href="page3.html" class="nav-item"><span class="menu-icon">&#9745;</span> Элементы</a>
        
        <!-- &#9998; - символ карандаша (для анкеты) -->
        <a href="page4.html" class="nav-item"><span class="menu-icon">&#9998;</span> Анкета</a>
        
        <!-- &#10022; - символ звездочки/дизайна (для стилей) -->
        <a href="page5.html" class="nav-item"><span class="menu-icon">&#10022;</span> Стили</a>
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