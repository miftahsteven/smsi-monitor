import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import { Card, CardHeader, Col, FormGroup, Row } from "reactstrap";

const FilterDate = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const onChange = (dates) => {
    setDateRange(dates);
  };

  return (
    <Fragment>
      <Col xl="12">
        <Card className="p-0">
          <CardHeader>
            <Row className="d-flex flex-column gap-3">
              <Col md="3">
                <span>Filter Periode</span>
              </Col>
              <Col md="3">
                <DatePicker
                  className="form-control"
                  dateFormat="dd/MM/YYYY"
                  selectsRange
                  isClearable
                  startDate={startDate}
                  endDate={endDate}
                  maxDate={new Date()}
                  onChange={onChange}
                  placeholderText="Periode"
                />
              </Col>
            </Row>
          </CardHeader>
        </Card>
      </Col>
    </Fragment>
  );
};

export default FilterDate;
