import TopNav from "./components/Navbar";
import ProductCardVertical from "./components/ProductCard";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <TopNav />
      <div className="grid grid-cols-4 gap-4 py-6">
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductCardVertical />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
