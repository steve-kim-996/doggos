import { Button, ImageList, ImageListItem } from '@mui/material';
import { useDoDoggoStuff, useFetchDoggos } from './doggos/hooks/useDoggos';
import { useStyles } from './DogoHome.styles';

export function DoggoHome() {
  const { doggos } = useFetchDoggos()
  const { classes } = useStyles();
  const { bark } = useDoDoggoStuff();

  return <div className={classes.doggoContainer}><ImageList classes={classes} sx={{ width: 3000, height: 1000 }} cols={5} rowHeight={300} gap={300}>
    {doggos.map((doggo, index) => (
      <Button onClick={() => bark(index)}>
        <ImageListItem key={index}>
          <img src={doggo} alt='doggo' />
        </ImageListItem>
      </Button>
    ))}
  </ImageList>
  </div>
}
