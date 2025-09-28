import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import AiInsightContain from '../../../Component/DashBoard/AiInsight/index';

const AiInsight = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Dashboard" title="AI Insight" />
      </div>
      <AiInsightContain />
    </Fragment>
  );
};
export default AiInsight;