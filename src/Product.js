import React, { useEffect, useState } from "react";
import axios from "axios";

function Pro() {
  let url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories";
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(url).then((Response) => {
      setProduct(Response.data);
    });
  }, [url]);

  return <p>product</p>;
}
export default Pro;
