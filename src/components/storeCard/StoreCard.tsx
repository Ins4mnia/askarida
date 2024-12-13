import { NextPage } from "next";
import s from "./StoreCard.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  articul: string;
  price: number;
}

const StoreCard: NextPage<Props> = ({ src, title, articul, price }) => {
  return (
    <Link href={`/store/${articul}`} className={s.StoreCard}>
      <div className={s.StoreCard__info}>
        <Image width={1000} height={1000} alt="Фотография товара" src={src} className={s.StoreCard__img} />
        <div className={s.StoreCard__info__wrapper}>
          <h2 className={s.StoreCard__title}>{title}</h2>
          <p className={s.StoreCard__articul}>{articul}</p>
          <p className={s.StoreCard__price}>Цена - {price} ₽</p>
        </div>
      </div>
      <button className={s.StoreCard__buy}>Добавить в корзину</button>
    </Link>
  );
};

export default StoreCard;
