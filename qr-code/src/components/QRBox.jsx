import qr from "../assets/image-qr-code.png"
const QRBox = () => {
    return (
        <div className="container">
            <div className="qr-box-main">
                <div >
                    <img src={qr} className="qr-image"/>
                </div>
                <div className="title">
                Improve your front-end skills by building projects 
                </div>
                <div className="sub-title">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </div>
            </div>
        </div>
    )
}

export default QRBox