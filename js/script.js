window.onload = () => {
    ((p, t, d) => {
        let i = 0
            , ph = document.getElementById('phrase')
            , ti = document.getElementById('title')
            , im = document.getElementById('man');
        if (!ph || !ti || !im)
            return;
        // im.style.opacity = 0;
        // im.style.transition = 'opacity ' + d / 1000 + 's';
        // (im.complete ? Promise.resolve() : new Promise(r => im.onload = r)).then(() => requestAnimationFrame(() => im.style.opacity = 1));
        // requestAnimationFrame(() => im.style.opacity = 1);
        let x = setInterval(() => {
            ph.textContent = p[i];
            ti.textContent = t[0];
            if (i++ == p.length - 1) {
                ti.textContent = t[1];
                im.src = "/images/vanya-sm-bw.png";
                clearInterval(x)
            }
        }
            , d / p.length)
    }
    )(['ПРОБЛЕМИ З ІНТЕРНЕТОМ', 'КІТ ПОГРИЗ КАБЕЛЬ', 'НАЛАШТУВАТИ РОУТЕР', 'КУПИВ НОВИЙ СМАРТ', 'ПРОБЛЕМИ З ІНТЕРНЕТОМ'], ['ІНТЕРНЕТЧІКА', 'МАЙСТРА'], 6000);
};