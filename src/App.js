import "./App.css";

import { bannerImage } from "./Data/bannerImage";
import { productsData } from "./Data/productsData";
import { CommentData } from "./Data/CommentData";

import Header from "./Component/Layout/Header";
import Banner from "./Component/Banner/Banner";
import Product from "./Component/Product/Product";
import CommentArea from "./Component/CommentArea/CommentArea";
import Feature from "./Component/Feature/Feature";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner bannerImage={bannerImage} />
      <Product
        title="all products"
        info="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical"
        productsData={productsData}
      />
      <CommentArea CommentData={CommentData} />
      <Product
        title="New Arrivals"
        info="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical"
        productsData={productsData}
      />
      <Feature />
      <Footer/>
    </div>
  );
}

export default App;
