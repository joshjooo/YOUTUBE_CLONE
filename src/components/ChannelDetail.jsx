import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?id=${id}`).then((data) => {
      setChannelDetail(data?.items[0])
    });
    fetchFromAPI(`search?channelId=${id}&order=date`).then((data) => {
      setVideos(data?.items)
    });
  }, [id]);

  return (
    <Box minHeight={'95vh'} >
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(112,192,236,1) 0%, rgba(77,77,236,1) 35%, rgba(71,5,164,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop={ '-110px'} />
      </Box>
      <Box display={'flex'} p='2'>
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos}/>
        
      </Box>
    </Box>
  )
}

export default ChannelDetail