import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Box, Typography, useTheme } from "@mui/material";

const BasicCarousel = () => {
  const theme = useTheme();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
    >
      {[
        {
          id: 1,
          text:
            "“Having good partners with unique and innovative technologies\n" +
            "                         is key to SHARP Electronics Singapore’s strategy for meeting\n" +
            "                         the growing demand of highly integrated electronic devices with\n" +
            "                         intelligent software. XID’s solid technologies and dynamic team\n" +
            "                         are what we cherish and highly value.”",
          by: "                     — Toshifumi Nakai Director, SHARP Electronics Singapore\n",
        },
        {
          id: 2,
          text:
            "“Our experience was referenced by ICAO for defning a new\n" +
            "standard for electronic passport and allowed us to identify\n" +
            "two new biometric requirements: the iris scan and the facial\n" +
            "recognition. In our quest for a common Multimodal Biometrics\n" +
            "Platform, we have recognized XID as the preferred complimentary\n" +
            "facial recognition technology provider.”\n",
          by: "Lee Seng Hoong Sales & Marketing Director, IRIS Corporation Berhad\n",
        },
        {
          id: 3,
          text:
            "“With more than 20 years of experience working with best of\n" +
            "breed partners to deliver proven solutions to customers, Sun\n" +
            "Microsystems is constantly building successful partnerships\n" +
            "with companies providing leading edge technologies. XID offers\n" +
            "innovative face recognition technologies and we are confdent of\n" +
            "a long, fruitful partnership.”\n",
          by: "Lionel Lim Vice President & Managing Director, Asia South, Sun Microsystem",
        },
      ].map((testimonial, index) => (
        <SwiperSlide key={index}>
          <Box
            display="grid"
            style={{
              placeItems: "center",
              cursor: "pointer",
              minHeight: "200px",
            }}
          >
            <Box
              p={4}
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: "10px 10px 0px 0px",
                width: "40%",
                borderBottom: `10px solid ${theme.palette.secondary.main}`,
              }}
            >
              <Typography paragraph color="white" variant="body1">
                {testimonial.text}
              </Typography>
              <Typography textAlign="right" color="white" variant="body1">
                {testimonial.by}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BasicCarousel;
