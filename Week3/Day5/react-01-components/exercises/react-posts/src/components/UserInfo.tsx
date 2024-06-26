export type author = { name: string; avatarUrl: string };

interface UserInfoProps {
  author: author;
}
function UserInfo({ author }: UserInfoProps) {
  console.log("User info props", author);
  return (
    <div className="user">
      <img className="user-image" src={author.avatarUrl} alt={author.name} />
      <div className="user-name">{author.name}</div>
    </div>
  );
}

export default UserInfo;
