import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas } from 'react-bootstrap';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

function MainContent() {
    return(
        <Container className='pt-5'>
            <Row>
                <div>
                    <h1>MILLET PICK 베스트아이템</h1>
                </div>
            </Row>
            <div className='d-flex mx-1'>
                <div className='thumb'>
                    <div className='wrap'>
                        <a href="#1">
                            <img width={"313px"} height={"520px"} src="https://www.millet.co.kr/data/banner/nzCA5mnSR5dcnj1RHCLY.1iv6lez0x5jjn.jpg" alt="" />
                            <div className='thumbCont'>
                                <p style={{fontSize:'28px', fontWeight:700, lineHeight: '34px'}}>감각적 스타일의 베스트</p>
                                <p>아네씨 구스 다운</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='contSwiper mx-1'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[FreeMode]}
                        >
                        <SwiperSlide>
                            <img src="//www.millet.co.kr/data/product/list/20231031/B29iRcZ571HhTr0wKLa0BAtrgyb.1ibkcihsjgje9.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="//www.millet.co.kr/data/product/list/20231017/B29iRd72y0vezqitgWFeCAb8ond.vf3ogbkidftt.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="//www.millet.co.kr/data/product/list/20231017/1pCQHiWbBE68pe.rhoxawplge28.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="//www.millet.co.kr/data/product/list/20230908/1pAeOJBgoLpU13.qxoatvcxdp2q.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="//www.millet.co.kr/data/product/list/20231017/B29iRd3IoIttpskzBjTOve7iCwH.1h7fx7qom9b36.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Container>
    )
}


export default MainContent;