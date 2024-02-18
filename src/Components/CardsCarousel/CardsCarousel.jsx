

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';

export default function CardCarousel() {
  return (
    <ImageList sx={{ width: 380, height: 250 }} >
    <ImageListItem key="Subheader" cols={2} style={{ height: 'auto', textAlign: 'center' }}>
      <ListSubheader component="div" sx={{ fontSize: '1.3rem', color: 'black' }}>
        December
      </ListSubheader>
    </ImageListItem>
    {itemData.map((item) => (
      <ImageListItem key={item.img} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <Typography variant="h11"  >
        {item.date}
        </Typography>
        <img
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
          style={{ }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , marginTop:'50px'}}>

        <ImageListItemBar
          title={item.title}
          subtitle={`${item.author} `}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.date}`}
            >
              <InfoIcon />
            </IconButton>
          }
          
          sx={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '0 0 10px 10px' }}
        />
       
        
        </div>
   
        
      </ImageListItem>
    ))}
  </ImageList>
  );
}

const itemData= [
    {

        img: 'https://bloximages.chicago2.vip.townnews.com/timegoggles.com/content/tncms/assets/v3/editorial/f/2f/f2ffe3e4-4d3b-11ec-b49c-f34ce88cef57/619e5b91468a5.image.jpg?resize=1200%2C800',
        title: 'Birthday',
        author:'Juarez Jimenez',
        date :'12/12/2021',

    },
    {

        img: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/1622M04_JO079_H.JPG',
        title: 'Birthday',
        author:'Maria Jimenez',
        date :'12/12/2021',
    
    },
    {

        img: 'https://bloximages.chicago2.vip.townnews.com/timegoggles.com/content/tncms/assets/v3/editorial/f/2f/f2ffe3e4-4d3b-11ec-b49c-f34ce88cef57/619e5b91468a5.image.jpg?resize=1200%2C800',
        title: 'Birthday',
        author:'Juarez Jimenez',
        date :'12/12/2021',

    },
    {

        img: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/1622M04_JO079_H.JPG',
        title: 'Birthday',
        author:'Maria Jimenez',
        date :'12/12/2021',
    
    },

    
]