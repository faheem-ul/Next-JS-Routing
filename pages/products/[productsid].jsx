// this page is dedicated to the dynmaic routing

import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  //   console.log(router);
  const productId = router.query.productsid;

  console.log(productId);

  return (
    <div>
      <h1>Product Details of product` {productId}`</h1>
    </div>
  );
}

export default ProductDetails;
