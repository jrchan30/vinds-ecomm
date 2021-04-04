import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/CollectionsOverviewContainer";
import PageWrapperAnimate from "../../components/layouts/PageWrapperAnimate";
import CollectionPageContainer from "../collection/CollectionPageContainer";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    // ON SNAPSHOT (LIVE RELOAD) SNIPPET
    // const collectionRef = firestore.collection("/collections");
    // collectionRef.orderBy("title", "desc").onSnapshot(async (snapshot) => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   setLoading(false)
    // });

    // FETCH API SNIPPET
    // const collectionRef = firestore.collection("/collections");
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/vinds-db/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    // FIREBASE GET ON MOUNT (called once when mounted)
    // const collectionRef = firestore.collection("/collections");
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   setLoading(false);
    // });

    // USING REDUX
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <PageWrapperAnimate>
      <div className="mt-10">
        <h1 className="text-3xl font-bold pb-4 text-gray-800">Collections</h1>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    </PageWrapperAnimate>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
