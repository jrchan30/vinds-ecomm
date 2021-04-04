import { takeLatest, call, put } from "redux-saga/effects";
import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebaseUtils";

import ShopActionTypes from "./shopTypes";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

export function* fetchCollectionsAsync() {
  yield console.log("triggered");

  try {
    const collectionRef = firestore.collection("/collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
