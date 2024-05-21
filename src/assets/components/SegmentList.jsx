import SegmentThumbnail from '../image/captured-pict.png';
import SegmentInfo from './SegmentInfo.jsx';

export default function SegmentList(){
    return(
        <div className='segment-card'>
            <div className='segment-thumbnail'>
                <img src={SegmentThumbnail}></img>
            </div>
            <SegmentInfo />
        </div>
    );
}