import React from "react";
import Image from "next/image";
import { Product } from "../lib/graphpql/collection/getCollectionWithProduct";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const price = product.priceMin;

  return (
    <div className="product-card">
      <div className="product-card__inner">
        <figure className="product-card__image" style={{ margin: 0 }}>
          <a href={`/products/${product.handle}`}>
            <Image
              priority
              src={product.images[0]?.originalSrc}
              height={400}
              width={400}
              alt="alt"
            />
          </a>
        </figure>
        <div className="product-card__info mt-2" style={{ textAlign: "left" }}>
          <div className="product-card__title font-semibold text-sm md:text-base">
            {product.title}
          </div>
          <div className="product-card__price  font-semibold text-sm">
            ${price.toLocaleString("en-US")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;