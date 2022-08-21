import React from "react";
import '../styles/Template.scss'
import picture1 from '../assets/images/picture1.jpg'
import picture2 from '../assets/images/picture2.jpg'
import picture3 from '../assets/images/picture3.jpg'
import picture4 from '../assets/images/picture4.jpg'
import Lightbox from 'react-image-lightbox';

class Template extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: true,
        images: [
            picture1,
            picture2,
            picture3,
            picture4,
        ],
        imageup:[]
    };
    handlepicture = (picture) =>{
        this.setState({
            imageup:[picture],
        })
    }
    click = (abc) => {
        let {isOpen,images} = this.state
        let indexOjb = images.findIndex(item => item === abc)
        console.log(abc)
        this.setState({
            photoIndex:indexOjb,
            isOpen:!isOpen
        })
    }
    
    render() {
        
        const { photoIndex, isOpen } = this.state;
        let {images,imageup} = this.state
        let isEmtyojb = Object.keys(imageup).length === 0;
        console.log(isEmtyojb)
        return (
                <div className="container">
                    
                 
                    <div className="content-left">
                        <div className="picture-up">
                            { isEmtyojb === true ?
                             <img src={picture1} />
                             :
                             <img src={{imageup}} onClick={() => this.click(imageup)}/>
                            }
                           
                        </div>

                        <div className="picture-down">
                            {images.map((item,index) => {
                                return(
                                <>
                            <div className="img-small" key={index}>
                                <img src={item} onClick={() => this.handlepicture(item)} />
                            </div >
                                </>
                                )
                            })}
                            
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="shoes">Giày chạy bộ nam New Balance - M860E11</div>
                        <div className="price">1.658.000 ₫</div>
                        <div className="size">Size: 42</div>
                        <div className="quantity">Số Lượng</div>
                        <input className="input" value={1} type='number' min={1} />
                        <button className="buy" >Chọn Mua</button>
                    </div>
                    

                <div>
                    {isOpen === false && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: true })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                            }
                        />
                    )}
                </div>
            </div>
        )
    }
}
export default Template;