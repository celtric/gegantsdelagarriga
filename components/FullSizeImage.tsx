import React from "react";
import {Box} from "@mui/material";
import Image from "next/image";
import {StaticImageData} from "next/dist/client/image";

type Props = {
  image: StaticImageData,
  alt: string,
  mb?: number
};

const FullSizeImage: React.FC<Props> = ({image, alt, mb = 4}) => {
  return <Box sx={{mb, "& img": {borderRadius: 2, display: "block", width: "100%", height: "auto"}}}>
    <Image src={image} alt={alt} />
  </Box>;
};

export default FullSizeImage;
