import { Grid2, Skeleton, Stack } from "@mui/material";
import React from "react";
import { BouncingSkeleton } from "../styles/StyledComponents";

const LayoutLoader = () => {
  return (
    <Grid2 container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
        <Grid2
          item
          size={{ sm: 4, md: 3 }}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}
        >
          <Skeleton variant="rectangular" height="100vh" />
        </Grid2>
        <Grid2 item  size={{ xs: 12, sm: 8, md:5, lg:6 }} height={"100%"}>
          <Stack spacing={"1rem"}>
            {
                Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton key={index} variant="rectangular" height={"5rem"} />
                ))
            }
            </Stack>
        </Grid2>
        <Grid2
          item
          size={{ md: 4, lg: 3 }}
          sx={{
            display: { xs: "none", md: "block" },
          }}
          height={"100%"}
        >
          <Skeleton variant="rectangular" height="100vh" />
        </Grid2>
      </Grid2>
  );
};

const TypingLoader = () => {
  return (
    <Stack
      spacing={"0.5rem"}
      direction={"row"}
      padding={"0.5rem"}
      justifyContent={"center"}
    >
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.1s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.2s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.4s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.6s",
        }}
      />
    </Stack>
  );
};

export { TypingLoader, LayoutLoader };
