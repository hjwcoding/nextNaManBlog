export default function BlogCardList() {
  const posts = [
    { id: 0, title: "게시글 0", author: "황재웅", date: "2023.07.08", content: "안녕하세요 반갑습니다." },
    { id: 1, title: "게시글 1", author: "황재웅", date: "2023.07.08", content: "안녕하세요 반갑습니다." },
    { id: 2, title: "게시글 2", author: "황재웅", date: "2023.07.08", content: "안녕하세요 반갑습니다." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-shadow"
        >
          <div className="text-sm text-gray-500 mb-1">{post.date}</div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">{post.title}</h2>
          <p className="text-gray-800">{post.content}</p>
          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <span>작성자: {post.author}</span>
            <div className="space-x-2">
              <button className="hover:underline">수정</button>
              <button className="hover:underline">삭제</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
