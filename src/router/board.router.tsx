import BoardLayout from "../views/board/layouts/Board.layout";
import BoardIndex from "../views/board/Board.view";

export const boardRouter = [
  {
    path: "",
    element: <BoardLayout title={"B.H. 익명 Board"} />,
    children: [
      {
        index: true,
        element: <BoardIndex />,
        loader: async ({ request }: { request: Request }) => {
          try {
            const url = new URL(request.url);
            let query = url.searchParams.toString();
            if (!query) {
              query = "page=1&limit=10";
            }
            const data = await fetch(`http://localhost:4000/api/post?${query}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            const result = await data.json();
            return result;
          } catch (error) {
            console.error(error);
            return [];
          }
        },
      },
      {
        path: ":postId",
        // TODO: BoardDetail component
        element: (
          <div>
            <h2>Board Detail</h2>
          </div>
        ),
      },
      {
        path: "write",
        element: (
          <div>
            <h2>Board Write</h2>
          </div>
        ), // TODO: BoardWrite component
      },
      {
        path: ":postId/edit",
        element: (
          <div>
            <h2>Board Edit</h2>
          </div>
        ), // TODO: BoardEdit component
      },
      {
        path: ":postId/delete",
        element: (
          <div>
            <h2>Board Delete</h2>
          </div>
        ), // TODO: BoardDelete component
      },
    ],
  },
];
