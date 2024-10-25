import cn from "classnames/bind";
import styles from "./BoardItemHeader.module.scss";

const cx = cn.bind(styles);

export const BoardItemHeader = () => {
  return (
    <div className={cx("Wrapper")}>
      <p className={cx("Index")}>순번</p>
      <h2 className={cx("Subject")}>제목</h2>
    </div>
  );
};
