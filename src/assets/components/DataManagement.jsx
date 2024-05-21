import SegmentInfo from './SegmentInfo';
import SegmentList from './SegmentList';
import SegmentTable from './SegmentTable';
import SegmentPicture from './SegmentPicture';
import Navbar from './Navbar';

import './style/Segment.css'

export default function DataManagement(){
    return(
        <main>
            <Navbar />
            <div className='datamanagement-content'>
                <div className='flex-segmentlist'>
                    {/* <Filter/> */}
                    <SegmentList />
                </div>
                <div className='flex-segmentdetail'>
                    <SegmentPicture />
                    <SegmentInfo />
                    <SegmentTable />
                </div>
            </div>
        </main>
        
    );
}