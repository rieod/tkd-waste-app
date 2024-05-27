import CodeImage from '../image/qrcode.png'

export default function GenerateImage(){
    return(
        <div className='flex-generatecode'>
                <div className='generatecode'>
                    <img src={CodeImage}></img>
                </div>
                <div className='action-generatecode'>
                    <button>Download</button>
                    <button>Print</button>
                </div>
            </div>
    );
}