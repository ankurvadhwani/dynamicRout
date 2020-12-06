import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "./components/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

function Pro() {
  let url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories";
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(url).then((Response) => {
      setProduct(Response.data);
    });
  }, [url]);

  if (product) {
    let { categories } = product;
    console.log(categories[0]);

    return (
      // <Box
      //   title={categories[0].title}
      //   description={categories[0].description}
      // />
      categories.map((data) => {
        return <Box title={data.title} description={data.description} />;
      })
    );
  }
  return (
    <div>
      {/* <CircularProgress color="secondary" /> */}
      hello
    </div>
  );
}
export default Pro;
