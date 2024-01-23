import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductPage from "./page/ProductPage";
import FaqPage from "./page/FaqPage";
import BlogPage from "./page/BlogPage";
import AboutUsPage from "./page/AboutUsPage";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeLayout}>
            <Route index Component={HomePage} />
            <Route path="/product" Component={ProductPage} />
            <Route path="/faq" Component={FaqPage} />
            <Route path="/blog" Component={BlogPage} />
            <Route path="/about" Component={AboutUsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
