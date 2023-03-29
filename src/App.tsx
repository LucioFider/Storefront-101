import Header from "./components/Header";
import TopNav from "./components/Navbar";
import ProductCardVertical from "./components/ProductCard";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <TopNav />
      <header className="py-6">
        <Header />
      </header>
      <div className="grid grid-cols-4 gap-4 py-6">
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
      </div>
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  );
}

export default App;
