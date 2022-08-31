import React, { useState } from "react";
import '../styles/Template.scss'
import picture1 from '../assets/images/picture1.jpg'
import picture2 from '../assets/images/picture2.jpg'
import picture3 from '../assets/images/picture3.jpg'
import picture4 from '../assets/images/picture4.jpg'
import Lightbox from 'react-image-lightbox';

const images = [
    picture1,
    picture2,
    picture3,
    picture4,
]



const Template = () => {
    const [currentUpImage, setUpImage] = useState(picture1)
    const [isOpen, setIsOpen] = useState(true)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [value, setValue] = useState(0)

    const handleclick = () => {
        setIsOpen(false);
        let indexOjb = images.findIndex(item => item === currentUpImage)
        setPhotoIndex(indexOjb)
    }
    const handleadd = () => {
        setValue(value + 1)
    }
    const handlesub = () => {
        if(value === 0){
            return;
        }
        setValue(value -1)
    }
    return (
        <div className="container">


            <div className="content-left">
                <div className="picture-up">
                    <img src={currentUpImage} onClick={() => handleclick()} />
                </div>

                <div className="picture-down">
                    <div className="img-small">
                        <img src={picture1} onClick={() => setUpImage(picture1)} />
                    </div >
                    <div className="img-small">
                        <img src={picture2} onClick={() => setUpImage(picture2)} />
                    </div >
                    <div className="img-small">
                        <img src={picture3} onClick={() => setUpImage(picture3)} />
                    </div >
                    <div className="img-small">
                        <img src={picture4} onClick={() => setUpImage(picture4)} />
                    </div >
                </div>
            </div>
            <div className="content-right">
                <div className="shoes">Giày chạy bộ nam New Balance - M860E11</div>
                <div className="price">1.658.000 ₫</div>
                <div className="size">Size: 42</div>
                <div className="quantity">Số Lượng</div>
                <div className="input">
                        <button onClick={() => handlesub()}>-</button>
                        <input value={value} min={0} />
                        <button onClick={() => handleadd()}>+</button>
                </div>
                <button className="buy" >Chọn Mua</button>
            </div>
            <div>
                {isOpen === false && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen({ isOpen: true })}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>

        </div>
    )
}

export default Template;