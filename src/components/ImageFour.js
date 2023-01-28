import { Parallax } from 'react-parallax';
import Space from '../image/Space.jpg'

const ImageFour = () => (
    <Parallax className='image' bgImage={Space} strength={800}>
       <div className='content'>
          <span className='img-txt'>A trip to Space</span>
       </div>      
    </Parallax>
);

export default ImageFour;