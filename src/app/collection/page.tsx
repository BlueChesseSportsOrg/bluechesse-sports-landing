"use client";
import React, { useEffect, useState } from "react";
import {
  Collection,
  getCollectionWithProducts,
  GetCollectionWithProductsResult,
  Product,
  SortBy,
} from "../lib/graphpql/collection/getCollectionWithProduct";
import FilterToolbar from "./FitlterToolBar";
import ProductList from "./ProductList";

type Props = {
  handle: string;
  sortBy: SortBy;
};

const CollectionPage: React.FC<Props> = () => {
  const [collection, setCollection] = useState<Collection | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const numOfDisplays: number = 16;

  const fetchData = async (cursor?: any) => {
    let result: GetCollectionWithProductsResult;
    try {
      result = await getCollectionWithProducts(
        "bluechesse-plans",
        numOfDisplays,
        "manual",
        cursor
      );
    } catch (err: any) {
      alert(err.message);
      return;
    }
    if (!collection) {
      setCollection(result.collection);
    }
    if (products) {
      setProducts([...products, ...result.products]);
    } else {
      setProducts([...result.products]);
    }
    setCursor(result.cursor);
    setHasNextPage(result.hasNextPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article className="collection">
      <header>
        <h1 className="font-semibold mb-9 md:mb-14 text-center text-gray-700 text-3xl md:text-4xl">
          {collection && collection.title}
        </h1>
        <FilterToolbar />
      </header>
      <section>
        <div className="container">
          {products ? (
            <ProductList products={products} />
          ) : (
            "loading"
          )}
        </div>
      </section>
    </article>
  );
};

export default CollectionPage;