import CodeImage from '../image/qrcode.png'
import { useState, useRef } from "react";
// other previous imports
import * as htmlToImage from "html-to-image";


export default function GenerateImage(){
    const qrCodeRef = useRef(null);
    const downloadQRCode = () => {
        htmlToImage
        .toPng(qrCodeRef.current)
        .then(function (dataUrl) {
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "qr-code.png";
            link.click();
        })
        .catch(function (error) {
            console.error("Error generating QR code:", error);
        });
    };

    return(
        <div className='flex-generatecode'>
                <div className='generatecode'>
                    {/* <img src={CodeImage}></img>  */}
                    <QRCode value={url} size={300} />
                </div>
                <div className='action-generatecode'>
                    {/* <button>Download</button> */}
                    <button onClick={downloadQRCode}>Download QR Code</button>
                    <button>Print</button>
                </div>
            </div>
    );
}