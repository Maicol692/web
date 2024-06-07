import React, { useEffect } from 'react';
import '../Styles/carousel.css';

export const Carousel = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 5000); // Rotación cada 5 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    const handlePrevClick = () => {
        const items = document.querySelectorAll('.carousel-item');
        const activeItem = document.querySelector('.carousel-item.active');
        const activeIndex = Array.from(items).indexOf(activeItem);
        const prevIndex = (activeIndex === 0) ? items.length - 1 : activeIndex - 1;

        items[activeIndex].classList.add('carousel-item-next');
        setTimeout(() => {
            items[activeIndex].classList.remove('active', 'carousel-item-next');
            items[prevIndex].classList.add('active');
        }, 500);
    };

    const handleNextClick = () => {
        const items = document.querySelectorAll('.carousel-item');
        const activeItem = document.querySelector('.carousel-item.active');
        const activeIndex = Array.from(items).indexOf(activeItem);
        const nextIndex = (activeIndex === items.length - 1) ? 0 : activeIndex + 1;

        items[activeIndex].classList.add('carousel-item-prev');
        setTimeout(() => {
            items[activeIndex].classList.remove('active', 'carousel-item-prev');
            items[nextIndex].classList.add('active');
        }, 500);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/src/img/publicidad.jpg" alt="Publicidad 1" />
                </div>
                <div className="carousel-item">
                    <img src="/src/img/publicidad2.jpg" alt="Publicidad 2" />
                </div>
                <div className="carousel-item">
                    <img src="/src/img/publicidad3.jpg" alt="Publicidad 3" />
                </div>
            </div>
            <button className="carousel-control-prev" onClick={handlePrevClick}>
                &#10094;
            </button>
            <button className="carousel-control-next" onClick={handleNextClick}>
                &#10095;
            </button>
        </div>
    );
};









