import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import Slider from "react-slick";

const Reviews = () => {
  const [slider, setSlider] = useState(Slider | (null > null));
  const options = {
    arrows: true,
    fade: true,
    infinite: true,
    items: 1.6,
    autoplay: true,
    margin: 10,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/photos/cheerful-young-athlete-outdoors-by-the-river-picture-id944300692?s=612x612",
      name: "Shreyas Ravetkar",
      comment:
        "Rentomojo was unbelievably helpful. Never thought that setting upa new place would be just few clicks away. The customer supportstaff was on their toes to help me. Anytime I need something for my house, Rentomojo has it. :)",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/photos/middle-aged-man-with-pleasant-face-expression-picture-id1005817658?b=1&k=20&m=1005817658&s=170667a&w=0&h=tpil3FJm2k6CHWiVczRjC-dBR8kP1ZckPMVETYX-89g=",
      name: "Kushal Tiwari",
      comment:
        "Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods, could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own a lot of stuff which would have come much later on my list. Heartfeltthanks to the whole Rentomojo team for making our rentingexperience completely hassle-free. It has been two great years and am sure there are many more to come.",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/photos/happy-girl-of-indian-origin-holds-a-laptop-computer-picture-id1315976563?b=1&k=20&m=1315976563&s=170667a&w=0&h=r5TzfGH7bUnQm-IWb_sXcxH8o9vK6YcrbiEiD8Bj6Yo=",
      name: "Nikita Sharma",
      comment:
        "The thought of renting the furniture had never occurred to me.When I saw Rentomojo's affordable range, I was super excited to try and it was really amazing. From service to product quality, everything was superb.1 don't have to carry the same furniture toe every house I move to and can change the look of my homenge, Iw whenever I want@and it was really amazing. From service to tha",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/photos/handsome-indian-man-using-mobile-phone-picture-id1094067774?b=1&k=20&m=1094067774&s=170667a&w=0&h=nsfZH6LPRoPuZOWbttiQ3aT8SSegggfHNmDQVOfk0dc=",
      name: "Navin Kumar",
      comment:
        "When I moved to Bangalore from Chennai, I went to multiple  websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :D",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/photos/smiling-female-young-college-student-of-indian-ethnicity-picture-id578811140?b=1&k=20&m=578811140&s=170667a&w=0&h=wFFvLO8CnLvzY3bCfD4PNx9EzE53i_YUjedQ22cPa1U=",
      name: "Anjali Sharma",
      comment:
        "I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a sucha low deposit and rent, I didn't have to spenda whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket.",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/photos/handsome-young-man-picture-id96775862?b=1&k=20&m=96775862&s=170667a&w=0&h=s6F5IrOoHf9MUR-nZ1l5KwvRrQL4tXV1QnpdnB5_uOQ=",
      name: "Manish Srivastava",
      comment:
        "Iwas suddenly asked to move to Chennai from Bengaluru in couple of days. Everything was garbled for me and huge tension of getting apartment, buying furnitures, selling while going back to Bangalore. Thanks to RentoMojo for excellent budgeted plans. With few mouse clicks and nominal security deposit u are done e. No tension for delivery, Rentomojo is a furniture wish wizard. Also takes care of relocation made my life easy. Happy to be a customer for Rentomojo. It made my house a happy home!",
    },
  ];

  return (
    <Box>
      <Flex>
        <Box
          textAlign={"start"}
          margin="80px 10px 10px 30px"
          // border={"1px solid red"}
          padding="30px 20px 0px 30px"
          height={"500px"}
        >
          <Text
            fontFamily={"Muli, sans-serif"}
            fontSize="25px"
            fontWeight={"bold"}
            width="150px"
          >
            Over 1.5 lac
          </Text>
          <Text fontFamily={"Muli, sans-serif"} fontSize="20px" color={"grey"}>
            happy subscribers
          </Text>
          <Box width="50px" border="1px solid red"></Box>
          <Text>
            Here's what they have to say about their RentoMojo experience.
          </Text>
          <Flex size="60px" marginTop={"20px"} width="150px">
            {/* <Button onClick={() => slider?.slickPrev()}> */}
            <AiOutlineLeftCircle size="50" color="grey" />
            {/* </Button> */}
            {/* <Button onClick={() => slider?.slickNext()}> */}
            <AiOutlineRightCircle size="50" color="black" />
            {/* </Button> */}
          </Flex>
        </Box>
        <Box margin="40px 10px 10px 30px">
          <Box
            padding={"0px 0px 20px 0px"}
            marginTop="30px"
            gap={"10px"}
            marginLeft="80px"
            z-index={1}
          >
            {/* <Slider {...options} ref={(slider) => setSlider(slider)}> */}
            <OwlCarousel className="owl-theme" {...options}>
              {data.map((e) => {
                return (
                  <Flex margin={"30px"} flexDirection="row">
                    <Box
                      className="item"
                      key={e.id}
                      border="1px solid grey"
                      padding={"80px 30px 30px 30px"}
                      borderRadius="20px"
                      height={"550px"}
                      bg="rgb(245,247,250)"
                    >
                      <Flex flexDirection={"row"} gap="20px">
                        <Box
                          // border="1px solid red"
                          width={"200px"}
                          height={"150px"}
                          padding={"10px"}
                        >
                          <img
                            src={e.image}
                            alt="img"
                            width={"200px"}
                            height={"150px"}
                            object-fit="cover"
                          />
                        </Box>
                        <Text
                          margin={"auto"}
                          marginLeft="10px"
                          fontWeight={"semibold"}
                        >
                          {e.name}
                        </Text>
                      </Flex>
                      <Text textAlign={"start"} marginTop="30px">
                        {e.comment}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
            </OwlCarousel>
            {/* </Slider> */}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Reviews;
