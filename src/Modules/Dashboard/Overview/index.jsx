import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import OverviewContain from '../../../Component/DashBoard/Overview/index';

const AiInsight = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Dashboard" title="Dashboard SMSI Overview" />
      </div>
      <OverviewContain />
    </Fragment>
  );
};
export default AiInsight;