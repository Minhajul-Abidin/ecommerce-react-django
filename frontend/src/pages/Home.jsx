import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";
import NewsLetter from "../components/NewsLetter";
import Offers from "../components/Offers";
import Popular from "../components/Popular";

function Home() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewProducts />
      <NewsLetter />
    </div>
  );
}

export default Home;
