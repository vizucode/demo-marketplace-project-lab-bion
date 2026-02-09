// pages/HomePage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newestProducts, setNewestProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // ============================================
    // TODO: FETCH PRODUCTS API
    // ============================================
    /*
    const response = await fetch("https://your-api.com/api/products?featured=true");
    const data = await response.json();
    setFeaturedProducts(data.featured);
    setNewestProducts(data.newest);
    */
    // ============================================

    // MOCK DATA untuk Featured Products (Bento Grid)
    const mockFeatured = [
      {
        id: 1,
        name: "Dior Sauvage EDP",
        price: 1450000,
        image:
          "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=60",
        area: "area1",
      },
      {
        id: 2,
        name: "Bleu de Chanel",
        price: 1650000,
        image:
          "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&auto=format&fit=crop&q=60",
        area: "area2",
      },
      {
        id: 3,
        name: "YSL La Nuit De L’Homme",
        price: 1550000,
        image:
          "https://images.unsplash.com/photo-1619994403073-2cec99c5d0c1?w=600&auto=format&fit=crop&q=60",
        area: "area3",
      },
      {
        id: 4,
        name: "Versace Eros",
        price: 1200000,
        image:
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&auto=format&fit=crop&q=60",
        area: "area4",
      },
      {
        id: 5,
        name: "Paco Rabanne Invictus",
        price: 1100000,
        image:
          "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&auto=format&fit=crop&q=60",
        area: "area5",
      },
    ];

    setFeaturedProducts(mockFeatured);
    setNewestProducts(mockNewest);
  };

  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleNavigateToDetailProduct = (productId) => {
    // Navigate handled by Link component
  };

  return (
    <div>
      <h2 style={{ margin: "32px 0px" }}>Featured Products</h2>
      <div className="bento-grid">
        {featuredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bento-item"
            style={{ gridArea: product.area }}
          >
            <img src={product.image} alt={product.name} />
            <figcaption>
              <h3>{product.name}</h3>
              <p>{formatRupiah(product.price)}</p>
            </figcaption>
          </Link>
        ))}
      </div>

      <h2 style={{ margin: "32px 0px" }}>Newest Products</h2>
      <div className="products-grid">
        {newestProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            stock={product.stock}
            price={product.price}
            category={product.category}
            image={product.image}
            isFeatured={product.isFeatured}
          />
        ))}
      </div>
    </div>
  );
}
