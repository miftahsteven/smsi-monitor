import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import KpiReportingContain from '../../../Component/DashBoard/KpiReporting/index';

const AiInsight = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Dashboard" title="KPI & Reporting ASN" />
      </div>
      <KpiReportingContain />
    </Fragment>
  );
};
export default AiInsight;