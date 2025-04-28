import { keyframes, Skeleton, styled } from "@mui/material"
import { Link as LinkComponent } from "react-router-dom"
import { grayColor, matBlack } from "../../constants/color"

export const VisuallyHiddenInput = styled("input")({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
})

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`

export const InputBox = styled("input")`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 3rem;
    border-radius: 1.5rem;
    background-color: ${grayColor};
`

export const SearchField = styled("input")`
    padding: 1rem 2rem;
    width: 20vmax;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    background-color: ${grayColor};
    font-size: 1.1rem;
`

export const CurveButton = styled("button")`
    border-radius: 1.5rem;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${matBlack};
    color: white;
    font-size: 1.1rem;
    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`

export const bounceAnimation = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.5); }
100% { transform: scale(1); }
`;

export const BouncingSkeleton = styled(Skeleton)(() => ({
  animation: `${bounceAnimation} 1s infinite`,
}));