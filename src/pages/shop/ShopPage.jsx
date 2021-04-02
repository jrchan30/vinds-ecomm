import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/CollectionsOverview";
import PageWrapperAnimate from "../../components/layouts/PageWrapperAnimate";
import CollectionPage from "../collection/CollectionPage";
import { updateCollections } from "../../redux/shop/shopActions";
import WithSpinner from "../../components/WithSpinner";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebaseUtils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  // let unsubscribedFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection("/collections");
    // ON SNAPSHOT (LIVE RELOAD) SNIPPET
    // collectionRef.orderBy("title", "desc").onSnapshot(async (snapshot) => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   setLoading(false);
    // });

    // FETCH API SNIPPET
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/vinds-db/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    // FIREBASE GET ON MOUNT (called once when mounted)
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
    return () => {
      setLoading(null);
    };
  }, [updateCollections]);

  return (
    <PageWrapperAnimate>
      <div className="mt-10">
        <h1 className="text-3xl font-bold pb-4 text-gray-800">Collections</h1>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    </PageWrapperAnimate>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

// const mapStateToProps = {};

export default connect(null, mapDispatchToProps)(ShopPage);
