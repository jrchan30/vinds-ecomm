import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/CollectionItem";
import { selectCollection } from "../../redux/shop/shopSelector";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div>
      <h2 className="text-2xl font-semibold pb-4 text-gray-800">
        {collection.title}
      </h2>
      <div className="grid grid-cols-4 gap-6 mb-10">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} type={collection.title} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
