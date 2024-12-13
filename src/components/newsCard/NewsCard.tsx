import { NextPage } from "next";
import s from "./NewsCard.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  src: string;
  id: number;
}

const NewsCard: NextPage<Props> = ({ title, src, id }) => {
  return (
    <Link href={`/news/${id}`} className={s.NewsCard}>
      <Image src={src} className={s.NewsCard__img} alt="Фотография новости" width={1000} height={1000} />
      <div className={s.NewsCard__wrapper}>
        <div className={s.NewsCard__info}>
          <h2 className={s.NewsCard__info__title}>{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
