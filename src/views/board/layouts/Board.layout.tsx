import { Outlet } from "react-router-dom";
import styles from "./Board.layout.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <header className={cx("HeaderWrapper")}>
      <h1 className={cx("Title")}>{title}</h1>
    </header>
  );
};

type BoardLayoutProps = {
  title: string;
};

const BoardLayout = (props: BoardLayoutProps) => {
  const { title } = props;
  return (
    <div className={cx("BoardLayoutWrapper")}>
      <Header title={title} />
      <div className={cx("Container")}>
        <Outlet />
      </div>
    </div>
  );
};

export default BoardLayout;
