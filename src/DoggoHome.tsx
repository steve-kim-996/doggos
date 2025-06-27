import { ImageList, ImageListItem } from '@mui/material';
import { useFetchDoggos } from './doggos/hooks/useDoggos';

export function DoggoHome() {
  const { doggos } = useFetchDoggos()

  return <ImageList sx={{ width: 700, height: 700 }} cols={5} rowHeight={300}>
    {doggos.map((doggo, index) => (
      <ImageListItem key={index}>
        <img src={doggo} alt='doggo' />
      </ImageListItem>
    ))}
  </ImageList>
}
