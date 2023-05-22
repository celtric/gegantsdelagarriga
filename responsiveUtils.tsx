import {Theme, useMediaQuery} from "@mui/material";
import React from "react";

export const useIsMobile = () => useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

export const MobileOnly: React.FC<{children: React.ReactNode}> = ({children}) => {
  const isMobile = useIsMobile();
  return isMobile ? <>{children}</> : null;
};

export const DesktopOnly: React.FC<{children: React.ReactNode}> = ({children}) => {
  const isMobile = useIsMobile();
  return isMobile ? null : <>{children}</>;
};
