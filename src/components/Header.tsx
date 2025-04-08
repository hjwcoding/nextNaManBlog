import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        React Blog
      </Link>
      <div>
        <Link href="/posts/new">글쓰기</Link>
        <Link href="/posts">게시글</Link>
        <Link href="/profile">프로필</Link>
      </div>
    </header>
  );
}
