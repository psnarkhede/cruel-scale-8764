import { Box, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/Productapp/action";

const FilterProducts = ({ category }) => {
  console.log(category);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [producttype, setProducttype] = useState([]);
  const location = useLocation();

  const handleCheckbox = (e) => {
    const option = e.target.value;

    let newProducttype = [...producttype];

    if (newProducttype.includes(option)) {
      newProducttype.splice(newProducttype.indexOf(option), 1);
    } else {
      newProducttype.push(option);
    }

    setProducttype(newProducttype);
  };
  console.log(producttype);

  useEffect(() => {
    if (producttype) {
      setSearchParams({ producttype });
      dispatch(getProducts(category, { params: { producttype } }));
    }
  }, [producttype, dispatch, setSearchParams]);

  //   useEffect(() => {
  //     let para = {
  //       params: {
  //         prodsType: searchParams.getAll("productType"),
  //       },
  //     };

  //     dispatch(getProducts(category, para));
  //   }, [location.search]);

  return (
    <Box>
      <CheckboxGroup padding="15px" marginTop="15px" color="grey">
        <Stack>
          <Checkbox
            color="grey"
            value="Sofas"
            defaultChecked={producttype.includes("Sofas")}
            onChange={handleCheckbox}
          >
            Sofas
          </Checkbox>
          <Checkbox
            color="grey"
            value="Center Tables"
            defaultChecked={producttype.includes("Center Tables")}
            onChange={handleCheckbox}
          >
            Center-Tabels
          </Checkbox>
          <Checkbox
            color="grey"
            value="Shoe Racks"
            defaultChecked={producttype.includes("Shoe Racks")}
            onChange={handleCheckbox}
          >
            Shoe-Racks
          </Checkbox>
          <Checkbox
            color="grey"
            value="TV Units"
            defaultChecked={producttype.includes("TV Units")}
            onChange={handleCheckbox}
          >
            TV Units
          </Checkbox>

          <Checkbox
            color="grey"
            value="Televisions"
            defaultChecked={producttype.includes("Televisions")}
            onChange={handleCheckbox}
          >
            Televisons
          </Checkbox>

          <Checkbox
            color="grey"
            value="Refrigerators"
            defaultChecked={producttype.includes("Refrigerators")}
            onChange={handleCheckbox}
          >
            Refrigerators
          </Checkbox>

          <Checkbox
            color="grey"
            value="Washing Machines"
            defaultChecked={producttype.includes("Washing Machines")}
            onChange={handleCheckbox}
          >
            Washing Machines
          </Checkbox>

          <Checkbox
            color="grey"
            value="smartphones"
            defaultChecked={producttype.includes("smartphones")}
            onChange={handleCheckbox}
          >
            Smartphones
          </Checkbox>

          <Checkbox
            color="grey"
            value="laptops"
            defaultChecked={producttype.includes("laptops")}
            onChange={handleCheckbox}
          >
            Laptops
          </Checkbox>

          <Checkbox
            color="grey"
            value="tablets"
            defaultChecked={producttype.includes("tablets")}
            onChange={handleCheckbox}
          >
            Tablets
          </Checkbox>

          <Checkbox
            color="grey"
            value="smart devices"
            defaultChecked={producttype.includes("smart devices")}
            onChange={handleCheckbox}
          >
            Smart Devices
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default FilterProducts;
