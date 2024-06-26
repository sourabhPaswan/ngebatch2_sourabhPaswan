import UserInfo, { author } from "./UserInfo";

type comment = {
  date: string;
  text: string;
  author: author;
};

interface CommentProps {
  data: comment[];
}

function Comment({ data }: CommentProps) {
  console.log("comments props", data);
  return (
    <>
      {data.map((comment, idx) => (
        <div key={idx} className="comment">
          <UserInfo author={comment?.author} />
          <div className="comment-text">{comment?.text}</div>
          <div className="comment-date">{comment?.date}</div>
        </div>
      ))}
    </>
  );
}

export default Comment;
