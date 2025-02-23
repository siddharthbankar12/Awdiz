import { useParams } from "react-router-dom";

const ParamsProduct = () => {
  const { productID } = useParams();

  return <div>ParamsProduct - {productID}</div>;
};

export default ParamsProduct;
