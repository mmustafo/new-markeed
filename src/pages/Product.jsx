import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <section className="w-full min-h-screen bg-amber-300 flex justify-center items-center">
      {isLoading && <h2 className="text-xl font-bold">Loading...</h2>}
      {error && <h2 className="text-xl text-red-500">{error}</h2>}
      {product && (
        <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-10">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[500px] h-auto object-cover rounded-md shadow-md"
          />
          <div className="w-3/5 flex flex-col">
            <h1 className="text-4xl font-bold text-lime-700 mb-6">{product.title}</h1>
            <p className="text-lg text-gray-700 font-medium">{product.description}</p>
            <h3 className="text-amber-950 font-bold">Brand: {product.brand}</h3>
            <h4 className="text-amber-500 font-black">Price: {product.price}</h4>
          </div>
        </div>
      )}
    </section>
  );
}

export default Product;