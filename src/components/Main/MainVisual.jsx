import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';

function MainVisual() {
    return( 
        <div className="mainWrap mx-auto mb-5">
        <Container className=''>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{delay:5000, disableOnInteraction:false}}
                loop={true}
                // loopAdditionalSlides={1}
                modules={[Pagination,Autoplay]}
                pagination={{type: 'fraction'}} 
                >
                <SwiperSlide>
                    <div>
                        <a href="#1"><img src="https://www.millet.co.kr/data/banner/Y9KnBC3L.vb925y7wbjac.jpg" alt="" /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="#2"><img style={{backgroundSize:"cover"}} src="https://www.millet.co.kr/data/banner/Y9KnBC3L.rh5115kho2na.jpg" alt="" /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="#3"><img src="https://www.millet.co.kr/data/banner/Y9KnBC3L.1ibec7egu0x9e.jpg" alt="" /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="#4"><img src="https://www.millet.co.kr/data/banner/Y9KnBC3L.skq30evdobj8.jpg" alt="" /></a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
      </div>
    )
}

export default MainVisual;