import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview";
import PageWrapperAnimate from "../../components/layouts/PageWrapperAnimate";
import CollectionPage from "../collection/CollectionPage";

function ShopPage({ match }) {
  return (
    <PageWrapperAnimate>
      <div className="mt-10">
        <h1 className="text-3xl font-bold pb-4 text-gray-800">Collections</h1>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    </PageWrapperAnimate>
  );
}

export default ShopPage;
