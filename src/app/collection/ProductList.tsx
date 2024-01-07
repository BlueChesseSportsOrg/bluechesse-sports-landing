import React from "react";
import { Product } from "../lib/graphpql/collection/getCollectionWithProduct";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[] | [];
};

const ProductList: React.FC<Props> = ({ products }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-9 py-9 md:py-14 md:py-12">
    {products.map((product, idx) => (
      <ProductCard product={product} key={idx} />
    ))}
  </div>
);

export default ProductList;