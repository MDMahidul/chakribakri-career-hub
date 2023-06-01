import { getStoredCart } from "../utils/fakeDB";

export const jobsAndCartData = async () => {
  let cartArray = [];
  const jobData = await fetch("jobinfo.json");
  const jobs = await jobData.json();
  const savedCart = getStoredCart();
  for (const id in savedCart) {
    const foundJob = jobs.find((job) => job.id === id);
    if (foundJob) {
      foundJob.quantity = savedCart[id];
      cartArray.push(foundJob);
    }
  }
  return { cartArray, jobs };
};

//export { productsAndCartData };
