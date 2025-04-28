import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon
} from "@mui/icons-material";
import moment from "moment";
import { transFormImage } from "../../lib/feature";

const Profile = ({user}) => {
  return (
    <Stack spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "cover",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
        src={user?.avatar?.url}
      />
      <ProfileCard heading={"Bio"} text={user?.bio || "lorem ipsum haduqw"} />
      <ProfileCard heading={"Username"} text={user?.username} Icon={<UserNameIcon />} />
      <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment(user?.createdAt).fromNow()} Icon={<CalendarIcon />} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    spacing={"1rem"}
    alignItems={"center"}
    direction={"row"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant={"body1"}>{heading}</Typography>
      <Typography color="gray" variant={"caption"}>{text}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
