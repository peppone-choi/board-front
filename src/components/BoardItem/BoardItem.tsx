import { Post } from "../../model/Post.model";
import cn from "classnames/bind";
import styles from "./BoardItem.module.scss";

const cx = cn.bind(styles);

type BoardItemProps = {
  index: number;
  post: Post;
};

export const BoardItem = (props: BoardItemProps) => {
  const { post } = props;
  const changedIp = "***";
  const ip = post.ip.split(".").map((item, index) => {
    if (index === 3) {
      return changedIp;
    }
    return item + ".";
  });
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("IndexAndSubject")}>
        <p className={cx("Index")}>{props.index}</p>
        <h2 className={cx("Subject")}>{post.title}</h2>
      </div>
      <p className={cx("Ip")}>IP: {ip}</p>
    </div>
  );
};
