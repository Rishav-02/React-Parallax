import { Parallax } from 'react-parallax';
import BlackHole from '../image/Black_hole.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={BlackHole} strength={800}>
       <div className='content'>
          <span className='img-txt'>A trip to Space</span>
       </div>      
    </Parallax>
);

export default ImageOne;