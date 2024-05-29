import SegmentInfo from './SegmentInfo';
import SegmentList from './SegmentList';
import SegmentTable from './SegmentTable';
import SegmentPicture from './SegmentPicture';

import './style/Segment.css'
import FilterBar from './FilterBar';

export default function DataManagement(){
    return(
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
    );
}