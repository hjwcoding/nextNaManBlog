import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Profile from "../components/Profile";
import NotionPage from "../components/NotionPage";

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <NotionPage />
      <PostList />
      <Footer />
  </>
  );
}
