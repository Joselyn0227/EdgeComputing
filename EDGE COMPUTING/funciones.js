document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class en el header
            this.classList.toggle('active');
            
            // Obtener el contenido
            const content = this.nextElementSibling;
            
            // Toggle show class en el contenido
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                // Opcional: cerrar otros acordeones abiertos
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('show');
                });
                document.querySelectorAll('.accordion-header').forEach(item => {
                    item.classList.remove('active');
                });
                
                content.classList.add('show');
                this.classList.add('active');
            }
        });
    });
});