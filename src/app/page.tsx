import NewsCard from "@/components/newsCard/NewsCard";
import s from "./page.module.scss";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import StoreCard from "@/components/storeCard/StoreCard";
import Slider from "@/components/slider/Slider";

const newsArray = [
  {
    id: 1,
    title: "Виктор Козлов: «Если бы мы отдали «Спартаку» шайбу, у нас были бы сложности»",
    src: "https://hcsalavat.ru/upload/resize_cache/webp/iblock/d93/gn9sdwziepu5hln90hmo3jtwdzpw4tcg.webp",
  },
  {
    id: 2,
    title: "«Салават Юлаев» одержал крупную победу над «Спартаком»",
    src: "https://hcsalavat.ru/upload/resize_cache/webp/iblock/59c/9bnn6kf2rkqojbwb3lkkq9jfuih6kfph.webp",
  },
  {
    id: 3,
    title: "Владислав Ефремов: «Несмотря на счёт, игра была тяжёлой»",
    src: "https://hcsalavat.ru/upload/resize_cache/webp/iblock/a7c/n10uw8b6cbeqj39cn3rklfzasy30y2v7.webp",
  },
];

const hockeyProducts = [
  {
    title: "Сумка на пояс черная",
    articul: "10355",
    price: 2490,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/340/460_460_2/6aphnv8dkfh8ffa4udnp8h0p3svqggmr.webp",
  },
  {
    title: "Рюкзак черный",
    articul: "10354",
    price: 3490,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/4bf/460_460_2/qtylq4e6e10zg6k8ykmo61lu0bc8zo4n.webp",
  },
  {
    title: "Стикерпак Салават Юлаев",
    articul: "10356",
    price: 200,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/1d9/460_460_2/ww4wbukohgfuur5cg3h8g7k5re4z8ioi.webp",
  },
];

const slides = [
  {
    id: 1,
    image: "https://hcsalavat.ru/upload/resize_cache/webp/iblock/d93/gn9sdwziepu5hln90hmo3jtwdzpw4tcg.webp",
    text: "Виктор Козлов: «Если бы мы отдали «Спартаку» шайбу, у нас были бы сложности»",
  },
  {
    id: 2,
    image: "https://hcsalavat.ru/upload/resize_cache/webp/iblock/59c/9bnn6kf2rkqojbwb3lkkq9jfuih6kfph.webp",
    text: "«Салават Юлаев» одержал крупную победу над «Спартаком»",
  },
  {
    id: 3,
    image: "https://hcsalavat.ru/upload/resize_cache/webp/iblock/a7c/n10uw8b6cbeqj39cn3rklfzasy30y2v7.webp",
    text: "Владислав Ефремов: «Несмотря на счёт, игра была тяжёлой»",
  },
];

export default function Home() {
  return (
    <section className={s.page}>
      <div style={{ width: "100%", height: "600px" }}>
        <Slider slides={slides} />
      </div>
      <span className={s.page__hr}></span>
      <div className={s.page__news__wrapper}>
        <h2 className={s.page__news__title}>Свежие новости</h2>
        <div className={s.page__news}>
          {newsArray.map((elem) => (
            <NewsCard title={elem.title} key={elem.id} id={elem.id} src={elem.src} />
          ))}
        </div>
        <Link className={s.page__news__link} href={"/news"}>
          <p>Показать все</p> <MoveRight />
        </Link>
      </div>
      <span className={s.page__hr}></span>
      <div className={s.page__store}>
        <h2>Наш магазин</h2>
        <div className={s.page__store__wrapper}>
          {hockeyProducts.map((elem) => (
            <StoreCard title={elem.title} articul={elem.articul} price={elem.price} key={elem.articul} src={elem.src} />
          ))}
        </div>
        <Link className={s.page__news__link} href={"/store"}>
          <p>Показать все</p> <MoveRight />
        </Link>
      </div>
    </section>
  );
}
