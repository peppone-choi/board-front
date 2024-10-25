"use client";

import cn from "classnames/bind";
import styles from "./Board.view.module.scss";
import { useLoaderData } from "react-router-dom";
import { BoardApp } from "../../components/Board/BoardApp";

const cx = cn.bind(styles);

const BoardIndex = () => {
  const data = useLoaderData();
  const json = JSON.stringify(data);
  const parsedData = JSON.parse(json);
  return (
    <div className={cx("BoardIndexWrapper")}>
      <BoardApp postAll={parsedData ?? null} />
    </div>
  );
};

export default BoardIndex;
