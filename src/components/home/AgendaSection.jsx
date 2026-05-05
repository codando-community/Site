import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { eventosAgenda } from '../../data/eventosData';
import styles from './AgendaSection.module.css';

const AgendaSection = () => {
  return (
    <Box id="agenda" className={styles.agendaContainer}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.swiperContainer}
      >
        {eventosAgenda.map((evento) => (
          <SwiperSlide key={evento.id} className={styles.swiperSlide}>
            <div 
              className={`${styles.bannerCard} ${!evento.image ? styles[evento.type] : ''}`}
              style={evento.image ? { backgroundImage: `url(${evento.image})` } : {}}
            >
              <div className={styles.dateTag}>
                <CalendarTodayIcon fontSize="small" />
                <span>{evento.date}</span>
                {evento.dayTime && <span className={styles.dayTime}>{evento.dayTime}</span>}
              </div>
              {!evento.image && (
                <>
                  <h2 className={styles.bannerTitle}>{evento.title}</h2>
                  <p className={styles.bannerSubtitle}>{evento.subtitle}</p>
                  {evento.speaker && <p className={styles.bannerSpeaker}>{evento.speaker}</p>}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default AgendaSection;
