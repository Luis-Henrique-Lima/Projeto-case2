import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src="../banner-img1.png"
                        alt="Último slide"
                    />
                    <Carousel.Caption>   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src="../banner-img2.png"
                        alt="Último slide"
                    />
                
                    <Carousel.Caption>  
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../banner-img3.png"
                        alt="Último slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners