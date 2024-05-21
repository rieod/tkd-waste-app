import SegmentInfo from './SegmentInfo';
import SegmentList from './SegmentList';
import SegmentTable from './SegmentTable';
import SegmentPicture from './SegmentPicture';
import Navbar from './Navbar';

import './style/Segment.css'
import FilterBar from './FilterBar';

export default function DataManagement(){
    return(
        <main>
            <Navbar />
            <div className='datamanagement-content'>
                <div className='flex-segmentlist'>
                    <FilterBar/>
                    <SegmentList />
                </div>
                <div className='flex-segmentdetail'>
                    <SegmentPicture />
                    <div className='flex-segmenttable'>
                        <SegmentInfo />
                        <SegmentTable />
                    </div>
                </div>
            </div>
        </main>
        
    );
}