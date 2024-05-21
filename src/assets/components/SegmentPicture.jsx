import SegmentCapture from '../image/captured-pict.png';
import SegmentIdentification from '../image/segmentation-pict.png';

export default function SegmentPicture(){
    return(
        <div className='segment-picture'>
            <img src={SegmentCapture}></img>
            <img src={SegmentIdentification}></img>
        </div>
    );
}