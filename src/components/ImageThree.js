import { Parallax } from 'react-parallax';
import Station from '../image/Station.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Station} strength={800}>
       <div className='content'>
          <span className='img-txt'>A trip to Space</span>
       </div>
    </Parallax>
);

export default ImageThree;