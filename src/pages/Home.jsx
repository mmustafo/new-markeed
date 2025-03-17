import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="flex flex-wrap justify-center gap-6 bg-amber-400 p-5">
      {data?.products?.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-5">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-40 h-40 object-cover rounded-md"
              />
              <h2 className="text-xl text-emerald-400">{product.title}</h2>
              <h4 className="text-amber-500">Price: {product.price}</h4>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Home;
