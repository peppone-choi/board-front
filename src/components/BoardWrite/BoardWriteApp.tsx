import { useNavigate } from "react-router-dom";
import styles from "./BoardWriteApp.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

export const BoardWriteApp = () => {
  const nav = useNavigate();
  async function getIpClient() {
    try {
      const response = await fetch("https://api64.ipify.org?format=json", {
        method: "GET",
      });
      const result = await response.json();
      return result.ip;
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    console.log(title, content);

    const ip = await getIpClient();
    const response = await fetch("http://localhost:4000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": ip,
      },
      body: JSON.stringify({ title, content }),
    });
    const result = await response.json();
    if (result) {
      nav("/board");
    } else {
      alert("작성에 실패했습니다.");
    }
  };
  return (
    <div className={cx("Container")}>
      <button
        className={cx("BackButton")}
        onClick={(e) => {
          e.preventDefault();
          nav(-1);
        }}
      >
        <span>{"< 뒤로가기"}</span>
      </button>
      <form onSubmit={handleSubmit} className={cx("Wrapper")}>
        <label className={cx("Title")}>
          <input type="text" placeholder="제목을 입력하세요" name="title" className={cx("Input")} />
        </label>
        <label className={cx("Content")}>
          <textarea name="content" placeholder="내용을 입력하세요" className={cx("Input")} />
        </label>
        <button type="submit" className={cx("Button")}>
          작성
        </button>
      </form>
    </div>
  );
};
