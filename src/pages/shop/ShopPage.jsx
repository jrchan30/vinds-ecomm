import React, { useState, useEffect } from "react";
import CollectionPreview from "../../components/CollectionPreview";

import SHOP_DATA from "./ShopPage.data";

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold pb-4 text-gray-800">Collections</h1>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
