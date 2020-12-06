import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

function Pro() {
  let url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories";
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(url).then((Response) => {
      setProduct(Response.data);
    });
  }, [url]);

  console.log(product);
  if (product) {
    return (
      <div>
        <h1>{product.title}</h1>
        <br />
        <h3>{product.description}</h3>
      </div>
    );
  }
  return (
    <div>
      <CircularProgress color="secondary" />
    </div>
  );
}
export default Pro;
