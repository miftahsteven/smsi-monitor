import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ContentFlow from "../../../Component/DashBoard/ContentFlow/index";

const AiInsight = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Dashboard" title="Content Flow" />
      </div>
      <ContentFlow />
    </Fragment>
  );
};
export default AiInsight;
