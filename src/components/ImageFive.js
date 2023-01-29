import { Parallax } from 'react-parallax';
import Moon from '../image/Moon.jpg'

const ImageFive = () => (
    <Parallax className='image' bgImage={Moon} strength={800}>
       <div className='content'>
          <span className='img-txt'>A trip to Space</span>
       </div>      
    </Parallax>
);

export default ImageFive;