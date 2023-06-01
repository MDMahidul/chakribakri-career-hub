// add data to local storage
const addToDB = (id) => {
  let applyCart = {};

  //get previous data from ls
  const storedCart = localStorage.getItem("apply-cart");
  if (storedCart) {
    applyCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = applyCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    applyCart[id] = newQuantity;
  } else {
    applyCart[id] = 1;
  }
  localStorage.setItem("apply-cart", JSON.stringify(applyCart));
};

/* get stored data from cart */
const getStoredCart = () => {
  let applyCart = {};

  //get previous data from ls
  const storedCart = localStorage.getItem("apply-cart");
  if (storedCart) {
    applyCart = JSON.parse(storedCart);
  }
  return applyCart;
};

/* remove a specific element from local storage */
const removeFromDb = (id) => {
  //get previous data from ls
  const storedCart = localStorage.getItem("apply-cart");
  if (storedCart) {
    const applyCart = JSON.parse(storedCart);
    if (id in applyCart) {
      delete applyCart[id];
      localStorage.setItem("apply-cart", JSON.stringify(applyCart));
    }
  }
};

/* clear data from local storage */
const deleteapplyCart = () => localStorage.removeItem("apply-cart");
export { addToDB, getStoredCart, removeFromDb, deleteapplyCart };
