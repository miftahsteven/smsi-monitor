import { H5, P } from '../../../../AbstractElements';
import ServiceContact from './ServiceContact';
import ServiceContactStatus from './ServiceContactStatus';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import React, { Fragment, useContext } from 'react';
import { More } from '../../../../Constant';
import AiRecommendation1 from '../../../Charts/googleCharts/AiRecommendation1';
import AiRecommendation2 from '../../../Charts/googleCharts/AiRecommendation2';
import AiRecommendation3 from '../../../Charts/googleCharts/AiRecommendation3';
import AiRecommendation4 from '../../../Charts/googleCharts/AiRecommendation4';

import GoogleContext from '../../../../_helper/GoogleChart';
import { Link } from 'react-router-dom';

const AllServices = () => {
  const chartData = useContext(GoogleContext);
  return (
    <Fragment>
      <Col xl="8" className="box-col-12 top-sell-sec des-xl-100">
        <Row>
          <Col sm='12' xl='6'>
            <AiRecommendation1 data={chartData.googleChart.SentimentChart} pieHole={0.4} />
            <P><Link to={"https://orbitdigitaldaily.com/kementerian-haji-dan-umrah-kaji-soal-penurunan-biaya-haji/?utm_source=chatgpt.com"} target='_blank'>Judul : Kementerian Haji dan Umrah Kaji Soal Penurunan Biaya Haji</Link></P>
          </Col>
          <Col sm='12' xl='6'>
            <AiRecommendation2 data={chartData.googleChart.SentimentChart2} pieHole={0.4} />
            <P><Link to={"https://www.antaranews.com/berita/5124148/kemenag-serahkan-beasiswa-zakat-indonesia-bagi-153-mahasiswa?utm_source=chatgpt.com"} target='_blank'>Judul : Kemenag serahkan Beasiswa Zakat Indonesia bagi 153 mahasiswa</Link></P>
          </Col>
        </Row>
        <Row>
          <Col sm='12' xl='6'>
            <AiRecommendation3 data={chartData.googleChart.SentimentChart3} pieHole={0.4} />
            <P><Link to={"https://www.antaranews.com/berita/5127736/kemenag-perkuat-kapasitas-juru-damai-di-daerah-rawan-konflik-keagamaan?utm_source=chatgpt.com"} target='_blank'>Judul : Kemenag perkuat kapasitas juru damai di daerah rawan konflik keagamaan</Link></P>
          </Col>
          <Col sm='12' xl='6'>
            <AiRecommendation4 data={chartData.googleChart.SentimentChart4} pieHole={0.4} />
            <P><Link to={"https://www.antaranews.com/berita/5126656/wamenag-tahun-2027-semua-guru-agama-tersertifikasi?utm_source=chatgpt.com"} target='_blank'>Judul : Wamenag: Tahun 2027 semua guru agama tersertifikasi.</Link></P>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};
export default AllServices;