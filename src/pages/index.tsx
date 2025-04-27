import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";
import NotionPage from "@/components/NotionPage";
import BlogCardList from "@/components/BlogCardList";


export default function Home() {
  return (
    <>
      <Header />
      <NotionPage />
      <PostList />
      <Footer />
      <BlogCardList />
  </>
  );
}
