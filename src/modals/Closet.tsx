import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const etsyListings = [
    {
        link:
            'https://www.etsy.com/listing/1272853690/what-should-i-do-hoodie?click_key=3f0c42b9da786b2e147d09da6be9002b864ba459%3A1272853690&click_sum=39f90ade&ref=shop_home_active_1',
        title: 'What Should I Do Hoodie',
        img:
            'https://i.etsystatic.com/37024078/r/il/5d9410/4264105728/il_1588xN.4264105728_i7u4.jpg',
    },
    {
        link:
            'https://www.etsy.com/listing/1268684978/what-should-i-do-tee?click_key=a46e172bcea74101d5c1ae2f540325cd3e5129a9%3A1268684978&click_sum=114d05e5&ref=shop_home_active_3',
        title: 'What Should I Do Tee',
        img:
            'https://i.etsystatic.com/37024078/r/il/a2dd60/4338350928/il_1588xN.4338350928_b643.jpg',
    },
    {
        link:
            'https://www.etsy.com/listing/1282706219/best-friend-tee?click_key=dabd2b5c75df74202eb18c581803ba095a717c55%3A1282706219&click_sum=11702396&ref=shop_home_active_2',
        title: 'Best Friend Tee',
        img:
            'https://i.etsystatic.com/37024078/r/il/81e61c/4338349450/il_1588xN.4338349450_odsd.jpg',
    },
];

export default function Closet() {
    return (
        <ImageList sx={{ width: '80%', height: '100%', zIndex: 2 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Available Merch</ListSubheader>
            </ImageListItem>
            {etsyListings.map(item => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        // actionIcon={
                        //     <IconButton
                        //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        //         aria-label={`info about ${item.title}`}
                        //     >
                        //         <InfoIcon />
                        //     </IconButton>
                        // }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
