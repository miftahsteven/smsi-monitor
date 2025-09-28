import { BasicCalendars } from "../../Constant";
import { H5 } from "../../AbstractElements";
import { myEventsList } from "./events";
import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { toast } from "react-toastify";

const CalenderContain = () => {
  const calendarEvents = myEventsList.map((event) => ({
    id: event.id.toString(),
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay || false,
  }));
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>{BasicCalendars}</H5>
              </CardHeader>
              <CardBody>
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  events={calendarEvents}
                  selectable
                  dateClick={(info) => toast.info(`Clicked on: ${info.dateStr}`)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CalenderContain;
