
export default function Featured({ posts }) {
  return (
    <section className="px-6 py-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">📌 Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(post => (
          <div key={post.id} className="p-4 bg-white rounded-xl shadow">
            <div className="text-sm text-gray-400">{post.date}</div>
            <h3 className="text-lg font-semibold text-blue-600">{post.title}</h3>
            <p className="text-gray-700">{post.content.slice(0, 60)}...</p>
          </div>
        ))}
      </div>
    </section>
  );
}
