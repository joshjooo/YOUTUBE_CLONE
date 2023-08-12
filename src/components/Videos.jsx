import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {

  if (!videos?.length) return 'Loading ....';
  
  return (
    <Stack direction={ direction || 'row'} flexWrap={'wrap'}
      justifyContent={'start'} gap={2}>
      {videos.reverse().map((item, idx) => (
        
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={ item } />}
          {item.id.videoId && <VideoCard video={ item } />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos