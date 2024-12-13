"use client";
import { NextPage } from "next";
import s from "./page.module.scss";
import StoreCard from "@/components/storeCard/StoreCard";
import { useEffect, useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [products, setProducts] = useState([]); // Храним данные с бэка

  const [searchTerm, setSearchTerm] = useState("");

  const searchProduct = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Функция для получения данных с сервера
  const fetchNews = async () => {
    try {
      const response = await fetch("http://localhost:5500/products"); // Запрос на сервер
      const data = await response.json(); // Парсим JSON
      setProducts(data); // Сохраняем данные в состояние
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => {
    fetchNews(); // Получаем данные при загрузке компонента
  }, []);

  const filteredProducts = products.filter((elem) => {
    return elem.title.toLowerCase().includes(searchTerm);
  });

  return (
    <div className={s.store__wrapper}>
      <h1>Все товары</h1>
      <input className={s.store__input} placeholder="Поиск по товарам" onChange={searchProduct} />
      <div className={s.store}>
        {filteredProducts.map((elem) => (
          <StoreCard title={elem.title} articul={elem.articul} price={elem.price} key={elem.articul} src={elem.src} />
        ))}
      </div>
    </div>
  );
};

export default Page;
