const data = {
    "portfolio": [
        {
            "title": "Photoshop",
            "image": "4.jpg",
            "description": "After not finding the tweet in BBCBreaking's profile and not finding it either using a web archive service, it was determined that this post was fake and photoshopped."
        },
        {
            "title": "Fearmongering",
            "image": "5.png",
            "description": "Obvious use of fear-inciting language with no citation or other context implies this post contains misinformation."
        },
        {
            "title": "Clickbait Titles",
            "image": "3.jpg",
            "description": "I mean, this one should be obvious. The 'clickbaity' title, the ridiculous concept, the unproffesionalism, this one is obviously fake news."
        },
    ]
};

const container = document.querySelector('.swiper-wrapper');

data.portfolio.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
        <div class="item">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
    container.appendChild(div);
});

window.addEventListener('load', () => {
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });
});