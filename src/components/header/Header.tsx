"use client";
import { NextPage } from "next";
import s from "./Header.module.scss";
import Link from "next/link";
import { Menu, ShoppingBasket } from "lucide-react";
import { useState } from "react";

const Header: NextPage = ({}) => {
  const [burger, setBurger] = useState(false);
  const openBurger = () => {
    setBurger(!burger);
  };
  return (
    <>
      <header className={s.Header}>
        <Link className={`${s.Header__link} ${s.Header__logo}`} href={"/"}>
          SalavatToday <span className={s.Header__logo__tick}>!</span>
        </Link>
        <div className={s.Header__wrapper}>
          <Link className={s.Header__link} href={"/news"}>
            Новости
          </Link>
          <Link className={s.Header__link} href={"/store"}>
            Магазин
          </Link>
        </div>
        <Link className={s.Header__link} href={"/cart"}>
          <ShoppingBasket />
        </Link>
      </header>
      <header className={s.Header__mobile}>
        <Link className={`${s.Header__mobile__link} ${s.Header__mobile__logo}`} href={"/"}>
          SalavatToday <span className={s.Header__mobile__logo__tick}>!</span>
        </Link>
        <button className={s.Header__mobile__burger}>
          <Menu onClick={openBurger} />
        </button>
      </header>
      <div className={`${s.Burger} ${burger ? s.active : null}`}>
        <div className={s.Burger__links}>
          <Link className={s.Burger__links__link} href={"/"}>
            Главная
          </Link>
          <Link className={s.Burger__links__link} href={"/news"}>
            Новости
          </Link>
          <Link className={s.Burger__links__link} href={"/store"}>
            Магазин
          </Link>
          <Link className={s.Burger__links__link} href={"/cart"}>
            Корзина
          </Link>
          <button className={s.Burger__close} onClick={openBurger}>
            Закрыть меню
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
