import { BoardAll } from "../../model/BoardAll.model";
import { BoardItem } from "../BoardItem/BoardItem";
import { BoardItemHeader } from "../BoardItemHeader/BoardItemHeader";
import styled from "./BoardApp.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styled);
type BoardAppProps = {
  postAll: BoardAll | null;
  index: number;
  limit: number;
};

export const BoardApp = (props: BoardAppProps) => {
  const { postAll } = props;
  if (postAll === null) {
    return <div>게시글을 불러오는데 문제가 있습니다.</div>;
  }
  const { posts } = postAll;
  if (posts.length === 0) {
    return <div>게시글이 없습니다.</div>;
  }
  return (
    <div className={cx("BoardAppWrapper")}>
      <BoardItemHeader />
      {posts &&
        posts.map((post, idx) => {
          return <BoardItem post={post} index={(props.index - 1) * props.limit + idx + 1} />;
        })}
    </div>
  );
};
