import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import EcommerceContain from '../../../Component/DashBoard/Scope/index';

const Ecommerce = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Dashboard" title="Media Scope" />
      </div>
      <EcommerceContain />
    </Fragment>
  );
};
export default Ecommerce;