const INITIAL_STATE = {
  sections: [
    {
      title: "Liquids",
      imageUrl: "https://i.ibb.co/Lr8hFWT/liquids.jpg",
      id: 1,
      linkUrl: "shop/liquids",
    },
    {
      title: "Mods",
      imageUrl: "https://i.ibb.co/Vx6x7Z9/mods.jpg",
      id: 2,
      linkUrl: "shop/mods",
    },
    {
      title: "RDAs",
      imageUrl: "https://i.ibb.co/QXMcjRZ/rdas.jpg",
      id: 3,
      linkUrl: "shop/rdas",
    },
    {
      title: "Batteries & chargers",
      imageUrl: "https://i.ibb.co/Jnrkt3N/batteries.jpg",
      id: 4,
      linkUrl: "shop/" + encodeURI("batteries & charger"),
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
