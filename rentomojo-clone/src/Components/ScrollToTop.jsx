import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box className="top-to-btm">
      {showTopBtn && (
        <Button
          className="icon-position icon-style"
          onClick={goToTop}
          padding="10px"
        >
          <Flex>
            Go Up <BsArrowUp size={"20px"} />
          </Flex>
        </Button>
      )}{" "}
    </Box>
  );
};
export default ScrollToTop;
