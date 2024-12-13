"use client";
// Этот указатель сообщает Next.js, что компонент рендерится только на стороне клиента.
// Это важно, так как `useState` используется, а он работает только на клиенте.

import { NextPage } from "next";
import { useState } from "react";
import s from "./Slider.module.scss";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";

// Интерфейс Slide описывает структуру объекта слайда: изображение (image) и текст (text).
interface Slide {
  image: string;
  text: string;
  id: number;
}

// Интерфейс Props описывает структуру пропсов для компонента Slider.
// В данном случае это массив объектов Slide.
interface Props {
  slides: Slide[];
}

const Slider: NextPage<Props> = ({ slides }) => {
  // Хук состояния useState для отслеживания текущего активного слайда.
  // Начальное состояние — индекс 0 (первый слайд).
  const [currentSlide, setCurrentSlide] = useState(0);

  // Функция для перехода на следующий слайд.
  const nextSlide = () => {
    // Увеличивает текущий индекс на 1.
    // Если индекс выходит за пределы массива, он сбрасывается на 0 (цикличность).
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Функция для перехода на предыдущий слайд.
  const prevSlide = () => {
    // Уменьшает текущий индекс на 1.
    // Если индекс становится отрицательным, он устанавливается на последний слайд.
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={s.Slider}>
      {/* Ссылка (Link) на конкретный контент, зависящий от текущего слайда.
          currentSlide + 100 — динамический путь для каждой новости */}
      <Link href={`/news/${slides[currentSlide].id}`} className={s.slide}>
        {/* Компонент Image из Next.js оптимизирует изображения.
            Изображение текущего слайда берётся из slides[currentSlide].image */}
        <Image src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} className={s.image} width={3000} height={3000} />
        {/* Текст слайда отображается под изображением */}
        <div className={s.text}>{slides[currentSlide].text}</div>
      </Link>

      {/* Кнопка для перехода на предыдущий слайд */}
      <button className={s.button} onClick={prevSlide}>
        <ArrowBigLeft /> {/* Иконка стрелки влево из библиотеки lucide-react */}
      </button>

      {/* Кнопка для перехода на следующий слайд */}
      <button className={s.button} onClick={nextSlide}>
        <ArrowBigRight /> {/* Иконка стрелки вправо из библиотеки lucide-react */}
      </button>
    </div>
  );
};

export default Slider;
