function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}

function changeTheme() {
    
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'theme-1') { setTheme('theme-2'); document.querySelector('.dot').style.marginLeft = '28px'; }
    if (currentTheme === 'theme-2') { setTheme('theme-3'); document.querySelector('.dot').style.marginLeft = '50px'; }
    if (currentTheme === 'theme-3') { setTheme('theme-1'); document.querySelector('.dot').style.marginLeft = '5px'; }
}

if (localStorage.getItem('theme') === null || document.documentElement.className === '') {
    setTheme('theme-1');
}

