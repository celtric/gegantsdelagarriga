import React from "react";
import {Box, ImageListItem, ImageListItemBar} from "@mui/material";
import Image from "next/image";
import {StaticImageData} from "next/dist/client/image";

type Props = {
  image: StaticImageData,
  description: string,
  float: "left" | "right"
};

const EmbeddedImage: React.FC<Props> = ({image, description, float}) => {
  return <Box sx={{
    mb: 2,
    ml: float === "right" ? 4 : 0,
    mr: float === "left" ? 4 : 0,
    float: {
      xs: undefined,
      md: float
    },
    "& img": {
      display: "block",
      width: 300,
      height: "auto",
      margin: "0 auto"
    }
  }}>
    <ImageListItem>
      <Image src={image} alt={description} />
      <ImageListItemBar title={description} position="below" sx={{textAlign: "center"}} />
    </ImageListItem>
  </Box>;
};

export default EmbeddedImage;
