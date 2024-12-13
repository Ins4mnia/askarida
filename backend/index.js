import express from "express";
import cors from "cors";
const app = express(); // Создаём приложение Express
const PORT = 5500; // Порт, на котором будет работать сервер

// Данные новостей (то, что есть у тебя на фронте)
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
  {
    id: 4,
    title: "Саша Хмелевский: «Непростой матч, соперник очень хорошо оборонялся»",
    src: "https://hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/45e/256_170_2/qdz46iqii06u1w3ku98yvct98762j0zy.webp",
  },
  {
    id: 5,
    title: "«Лада» х «Салават Юлаев», начало встречи в 20:00",
    src: "https://hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/7ff/256_170_2/qdy6gccu44twvmwrme75q7wz33032c16.webp",
  },
  {
    id: 7,
    title: "Расписание и состав «Салавата» на шестой выезд сезона",
    src: "https://hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/5a7/256_170_2/g2hcgz0tt3041t8ber9zrbatklr0w4na.webp",
  },
  {
    id: 8,
    title: "Данил Алалыкин: «Ненужные удаления сломали нам игру»",
    src: "https://hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/f6b/256_170_2/snrq9n6tx11a6lzgj0ignfb32vmd8ndt.webp",
  },
  {
    id: 9,
    title: "«Северсталь» х «Салават Юлаев», начало встречи в 21:30",
    src: "https://hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/987/256_170_2/mk1l02tt6cv1nqvmn06wut09psq1ha6x.webp",
  },
];

const hockeyProducts = [
  {
    title: "Джерси хоккейный реплика зеленый",
    articul: "1",
    price: 6500,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/c90/460_460_2/brrgxaezpirz2lv4xgs3y903cosambr8.webp",
  },
  {
    title: "Джерси хоккейный реплика черный",
    articul: "2",
    price: 6500,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/4f8/460_460_2/a17bplgz5wxpi94lxgpwmxwew34e9atv.webp",
  },
  {
    title: "Джерси сувенирное",
    articul: "3",
    price: 4800,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/aff/460_460_2/mhpqh08we0g95brwb32cndpgioa95ven.webp",
  },
  {
    title: "Шарф Салават Юлаев зеленый",
    articul: "4",
    price: 1300,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/b41/460_460_2/y132t0zdg9agoh3ctq8qv1u83rxmriao.webp",
  },
  {
    title: "Брюки черные",
    articul: "5",
    price: 5490,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/a84/460_460_2/75a9mdx716pxwx24y1io188fmvkmi01z.webp",
  },
  {
    title: "Футболка Лого (неон)",
    articul: "6",
    price: 1990,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/78a/460_460_2/cp7tf1aqjzji1e24eqvt4k0x87s8tos7.webp",
  },
  {
    title: "Сумка на пояс черная",
    articul: "7",
    price: 2490,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/340/460_460_2/6aphnv8dkfh8ffa4udnp8h0p3svqggmr.webp",
  },
  {
    title: "Рюкзак черный",
    articul: "8",
    price: 3490,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/4bf/460_460_2/qtylq4e6e10zg6k8ykmo61lu0bc8zo4n.webp",
  },
  {
    title: "Стикерпак Салават Юлаев",
    articul: "9",
    price: 200,
    src: "https://shop.hcsalavat.ru/upload/resize_cache/webp/resize_cache/iblock/1d9/460_460_2/ww4wbukohgfuur5cg3h8g7k5re4z8ioi.webp",
  },
];

// Разрешаем CORS (чтобы запросы с фронтенда работали)
app.use(cors());

// Роут для получения всех новостей
app.get("/news", (req, res) => {
  res.json(newsArray); // Отправляем новости в формате JSON
});

// Роут для получения новости по ID
app.get("/news/:id", (req, res) => {
  const id = parseInt(req.params.id); // Получаем id из параметров запроса и преобразуем в число
  const news = newsArray.find((item) => item.id === id); // Ищем новость
  if (news) {
    res.json(news); // Если новость найдена, отправляем её
  } else {
    res.status(404).json({ message: "Новость не найдена" }); // Если новости нет, возвращаем 404
  }
});

app.get("/products", (req, res) => {
  res.json(hockeyProducts); // Отправляем новости в формате JSON
});

// Роут для получения товара по артикулу
app.get("/products/:articul", (req, res) => {
  const articul = req.params.articul; // Получаем артикул из параметров запроса
  const product = hockeyProducts.find((item) => item.articul === articul); // Ищем товар
  if (product) {
    res.json(product); // Отправляем найденный товар
  } else {
    res.status(404).json({ message: "Товар не найден" }); // Если товара нет, возвращаем 404
  }
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
