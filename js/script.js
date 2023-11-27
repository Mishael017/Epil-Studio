// Burger Menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.menu');
    const lang = document.querySelector('.lang_change');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        lang.classList.toggle('active');


        // Переключаем класс 'close' для анимации бургера
        document.querySelectorAll('.bar').forEach(bar => {
            bar.classList.toggle('close');
        });
    });

    overlay.addEventListener('click', function () {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        lang.classList.remove('active');
        document.querySelectorAll('.bar').forEach(bar => {
            bar.classList.remove('close');
        });
    });

    // Добавляем обработчики клика на пункты меню
    const navItems = document.querySelectorAll('.nav_list a');
    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            scrollToSection(sectionId);
            // Закрываем меню после клика
            menu.classList.remove('active');
            overlay.classList.remove('active');
            lang.classList.remove('active');
            document.querySelectorAll('.bar').forEach(bar => {
                bar.classList.remove('close');
            });
        });
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}


// Lang Change
function addBorder(element) {
    element.classList.add('selected');
}

function removeBorder(element) {
    element.classList.remove('selected');
}

function selectLanguage(element) {
    // Remove 'selected' class from all languages
    document.querySelectorAll('.language').forEach(function (lang) {
        lang.classList.remove('selected');
    });

    // Add 'selected' class to the clicked language
    element.classList.add('selected');
}




// Slider For about_us_photo
let orderCounter = 0;

function rotatePhotos(direction) {
    const photoContainer = document.querySelector('.about_us_photo');
    const photos = Array.from(photoContainer.querySelectorAll('img'));

    if (direction === 'left') {
        orderCounter = (orderCounter - 1 + photos.length) % photos.length;
    } else if (direction === 'right') {
        orderCounter = (orderCounter + 1) % photos.length;
    }

    photos.forEach((photo, index) => {
        const newOrder = (index - orderCounter + photos.length) % photos.length;
        photo.style.order = newOrder;
    });
}


// Slider For Certeficate
let certificateOrderCounter = 0;

function rotatePhotos1(direction) {
    const certificateContainer = document.querySelector('.certificate_photo');
    const certificatePhotos = Array.from(certificateContainer.querySelectorAll('img'));

    if (direction === 'left') {
        certificateOrderCounter = (certificateOrderCounter - 1 + certificatePhotos.length) % certificatePhotos.length;
    } else if (direction === 'right') {
        certificateOrderCounter = (certificateOrderCounter + 1) % certificatePhotos.length;
    }

    certificatePhotos.forEach((photo, index) => {
        const newOrder = (index - certificateOrderCounter + certificatePhotos.length) % certificatePhotos.length;
        photo.style.order = newOrder;
    });
}


// Quetions Block
document.addEventListener('DOMContentLoaded', function () {
    const toggleBlocks = document.querySelectorAll('.question_item, .mobile_about_me_item');

    toggleBlocks.forEach(block => {
        const plusIcon = block.querySelector('.plus');
        const minusIcon = block.querySelector('.minus');
        const answer = block.querySelector('.answer');
        const readMoreButton = block.querySelector('.read_more_button');
        const hiddenText = block.querySelector('#hiddenText');
        const mobileDescription = block.querySelector('.mobile_description');

        block.addEventListener('click', function () {
            const isExpanded = this.classList.toggle('expanded');

            // Переключаем изображение плюса/минуса
            if (plusIcon) plusIcon.style.opacity = isExpanded ? 0 : 1;
            if (minusIcon) minusIcon.style.opacity = isExpanded ? 1 : 0;

            // Переключаем показ/скрытие блока с ответом
            if (answer) answer.style.maxHeight = isExpanded ? answer.scrollHeight + 'px' : 0;

            // Переключаем видимость текста и анимацию
            if (mobileDescription) {
                mobileDescription.classList.toggle('expanded');
                hiddenText.style.maxHeight = mobileDescription.classList.contains('expanded') ? hiddenText.scrollHeight + 'px' : 0;
            }

          
        });
    });
});




