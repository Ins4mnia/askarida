import { NextPage } from "next";
import s from "./page.module.scss";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div className={s.Page}>1</div>;
};

export default Page;