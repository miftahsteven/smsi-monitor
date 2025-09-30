import React, { Fragment, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Completed } from '../../../Constant';
import { H5, P } from '../../../AbstractElements';
//import { TodayTask } from '../../../Data/DashDefault';
import { useTodayTask } from '../../../Hooks/TodayTask';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  FacebookShareCount,
  WhatsappIcon,
  ThreadsShareButton,
  ThreadsIcon
} from "react-share";
import { Instagram } from 'react-feather';

function canUseWebShare() {
  return typeof navigator !== 'undefined' && !!navigator.share;
}

async function shareGeneric({ title, text, url }) {
  if (!canUseWebShare()) return false;
  try {
    await navigator.share({ title, text, url });
    return true;
  } catch {
    return false;
  }
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert('Link disalin ke clipboard');
  } catch {
    alert('Gagal menyalin link');
  }
}


const TodaysTaskProject = () => {

  //const { data: TodayTask, loading } = useTodayTask();
  const { tasks: TodayTask, loading } = useTodayTask({ orderBy: 'createdAt' });

  return (
    <Fragment>
      <Col md="6" className="box-col-12 box-col-6 today-task-sec">
        <Card>
          <CardHeader className="justify-content-between pb-0">
            <H5>Pantau Berita Hari Ini</H5>
            <div className="center-content">
              <P>Bagikan Berita Baru Dibawah</P>
              {/* <span>{Completed}</span> */}
            </div>
          </CardHeader>
          <CardBody>
            <div className="table-responsive task-details">
              <Table className="table-bordernone">
                <tbody>
                  {
                    //filter hanya yang statusnya item.show === true
                    !loading &&
                    TodayTask.filter(itemdata => itemdata.show === true).map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <span><Link to={`${item.url}`} target='_blank'>{item.task}</Link></span>
                            <P>{item.time}</P>
                            <P>{item.caption}</P>
                          </td>
                          {/* <td className="progress-showcase">
                            <div className="progress sm-progress-bar">
                              <div className={item.class} role="progressbar" style={{ width: item.width }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <P>{item.percent}</P>
                          </td> */}
                          <td>
                            {/* <Link className={item.btnclass} to={`${process.env.PUBLIC_URL}/tasks`}>{item.btn}</Link> */}
                            {/* jika item.btn mengandung "Berita Negatif, tidak perlu ada tombol untuk kopi item.url. Untuk positif dan netral, tambahkan tombol untuk melakukan copy URL " */}
                            {item.btn === 'Berita Negatif' ? <span className='font-secondary'>Konten Negatif</span> :
                              <Row>
                                <Col md="12" xl="12" className='d-flex align-items-center'>
                                  {/* buatkan tombol share dari react-share dibawah ini, dengan mode icon */}
                                  {/* buatkan tombol share IG ini sejajar dengan tombol react-share, karena saat ini tombol IG agak menjorok keatas */}
                                  <div className="d-inline-block mb-1">
                                    <button
                                      type="button"
                                      className="btn btn-sm mb-10"
                                      onClick={async () => {
                                        const shared = await shareGeneric({
                                          title: item.task,
                                          text: `${item.task}`,
                                          url: item.url
                                        });
                                        if (!shared) {
                                          await copyToClipboard(item.url);
                                          alert(
                                            'Instagram tidak mendukung direct share via web.\nLink sudah disalin, paste secara manual di aplikasi Instagram.'
                                          );
                                        }
                                      }}
                                      title="Share ke Instagram (manual)"
                                      style={{ fontSize: 12 }}
                                    >
                                      <Instagram size={32} className="me-1 font-secondary" />
                                    </button>
                                  </div>
                                  <>
                                    <FacebookShareButton url={item.url} quote={item.task} className="me-2" onShareWindowClose={() => alert('Terima kasih telah membagikan!')}>
                                      <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={item.url} title={item.task} className="me-2">
                                      <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <WhatsappShareButton url={item.url} title={item.task} separator=":: " className="me-2">
                                      <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                    <ThreadsShareButton url={item.url} title={item.task} separator=":: " className="me-2">
                                      <ThreadsIcon size={32} round />
                                    </ThreadsShareButton>
                                    <div style={{ marginTop: 6, fontSize: 12, fontWeight: 600 }}>
                                      <FacebookShareCount url={item.url}>
                                        {(shareCount) => <span>{shareCount || 0} shares</span>}
                                      </FacebookShareCount>
                                    </div>
                                  </>
                                </Col>
                              </Row>

                            }

                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table>
            </div>
            <div className="text-center">
              <a className="f-w-700" href="#javascript">Lainnya...</a>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default TodaysTaskProject;
