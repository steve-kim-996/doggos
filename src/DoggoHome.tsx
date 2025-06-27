import { Button, Fade, ImageList, ImageListItem, Popper } from "@mui/material"
import { useState } from "react"
import { DoggoDetail } from "./doggos/components/DoggoDetail"
import { useFetchDoggos } from "./doggos/hooks/useDoggos"
import { useStyles } from "./DogoHome.styles"

export function DoggoHome() {
  const { doggos } = useFetchDoggos()
  const { classes } = useStyles()

  const [isDogDetailPopperOpen, setIsDogDetailPopperOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setIsDogDetailPopperOpen((prev) => !prev)
  }

  return (
    <div className={classes.doggoContainer}>
      <ImageList
        classes={classes}
        sx={{ width: 3000, height: 1000 }}
        cols={5}
        rowHeight={300}
        gap={300}
      >
        {doggos.map((doggo, index) => (
          <>
            <Popper
              open={isDogDetailPopperOpen}
              anchorEl={anchorEl}
              placement="top"
            >
              {({ TransitionProps }) => {
                return (
                  <Fade {...TransitionProps} timeout={350}>
                    <DoggoDetail />
                  </Fade>
                )
              }}
            </Popper>
            <Button onClick={handleClick}>
              <ImageListItem key={index}>
                <img src={doggo} alt="doggo" />
              </ImageListItem>
            </Button>
          </>
        ))}
      </ImageList>
    </div>
  )
}
