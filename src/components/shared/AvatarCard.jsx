import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'
import { transFormImage } from '../../lib/feature'

const AvatarCard = ({avatar = [],max=4}) => {
  return <Stack direction={"row"} spacing={0.5}>
    <AvatarGroup max={max} sx={{
        position: "relative",
    }}>
        <Box width="5rem" height="3rem">
            {
                avatar.map((i,index)=>(
                    <Avatar
                        key={Math.random()*100}
                        src={transFormImage(i)}
                        alt={`Avatar ${index}`}
                        sx={{
                            width: "3rem",
                            height: "3rem",
                            position: "absolute",
                            left:{
                                xs:`${index+0.5}rem`,
                                sm:`${index}rem`,
                            }
                        }}
                    />
                ))
            }
        </Box>
    </AvatarGroup>

  </Stack>
}

export default AvatarCard