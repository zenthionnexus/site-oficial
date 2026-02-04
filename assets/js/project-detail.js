$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category && portfolioData[category]) {
        const project = portfolioData[category];

        $('#project-title').text(project.title);
        $('#project-description').text(project.description);

        const gallery = $('#project-gallery');
        project.images.forEach(image => {
            const galleryItem = `
                <div class="col-md-4 mb-4">
                    <a href="${image}" class="image-popup">
                        <img src="${image}" class="img-fluid rounded">
                    </a>
                </div>
            `;
            gallery.append(galleryItem);
        });

        $('.image-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

    } else {
        // Opcional: Lidar com o caso em que a categoria não é encontrada
        $('#project-title').text("Projeto não encontrado");
        $('#project-description').text("A categoria de projeto especificada não existe.");
    }
});
