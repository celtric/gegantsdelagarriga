import React from "react";
import {Box} from "@mui/material";
import Image from "next/image";
import {StaticImageData} from "next/dist/client/image";

type Props = {
  image: StaticImageData,
  alt: string,
  mb?: number,
  width?: number
};

const FullSizeImage: React.FC<Props> = ({image, alt, mb = 4, width}) => {
  return <Box sx={{mb, "& img": {borderRadius: 2, display: "block", width: "100%", height: "auto"}}}>
    <Image src={image} alt={alt} width={width} />
  </Box>;
};

export default FullSizeImage;
