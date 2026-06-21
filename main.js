// ========================================
// SCRIPT PRINCIPAL - GITHUB MERGE TEMPLATE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScrolling();
    setupCodeCopy();
    setupNavHighlight();
    console.log('✓ GitHub Merge Template - Interactive features enabled');
});

/**
 * Smooth scrolling para enlaces internos
 */
function setupSmoothScrolling() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Permite copiar bloques de código al clipboard
 */
function setupCodeCopy() {
    document.querySelectorAll('pre').forEach(pre => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copiar';
        copyBtn.title = 'Copiar código';
        
        copyBtn.addEventListener('click', () => {
            const code = pre.querySelector('code')?.textContent || pre.textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '✓ Copiado';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            });
        });
        
        pre.style.position = 'relative';
        pre.appendChild(copyBtn);
    });
}

/**
 * Resalta el link de navegación según la sección visible
 */
function setupNavHighlight() {
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav a[href^="#"]').forEach(link => {
            link.style.borderBottomColor = 'transparent';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.borderBottomColor = '#fff';
                link.style.background = 'rgba(255, 255, 255, 0.2)';
            } else {
                link.style.background = '';
            }
        });
    });
}
