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
  const page = new URLSearchParams(window.location.search).get("page") ?? 1;
  const limit = new URLSearchParams(window.location.search).get("limit") ?? 10;
  return (
    <div className={cx("BoardIndexWrapper")}>
      <BoardApp postAll={parsedData ?? null} index={Number(page)} limit={Number(limit)} />
    </div>
  );
};

export default BoardIndex;
