"use client";
import { useEffect, useState } from "react";
import s from "./page.module.scss";
import NewsCard from "@/components/newsCard/NewsCard";

const Page = () => {
  const [news, setNews] = useState([]); // Храним данные с бэка
  const [searchTerm, setSearchTerm] = useState("");

  // Функция для получения данных с сервера
  const fetchNews = async () => {
    try {
      const response = await fetch("http://localhost:5500/news"); // Запрос на сервер
      const data = await response.json(); // Парсим JSON
      setNews(data); // Сохраняем данные в состояние
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => {
    fetchNews(); // Получаем данные при загрузке компонента
  }, []);

  // Фильтрация новостей по поисковому запросу
  const filteredNews = news.filter((elem) => elem.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={s.news__wrapper}>
      <h1>Все новости</h1>
      <input className={s.news__input} placeholder="Поиск по новостям" onChange={(e) => setSearchTerm(e.target.value)} />
      <div className={s.news}>
        {filteredNews.map((elem) => (
          <NewsCard title={elem.title} key={elem.id} id={elem.id} src={elem.src} />
        ))}
      </div>
    </div>
  );
};

export default Page;
