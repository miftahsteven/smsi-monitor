import React, { Fragment } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { TreeViewData } from "../../../Data/Bonus-ui";
import { ArrowIcon, CheckBoxIcon } from "./BasicTree";

const CheckboxTree = () => {
  const disableTreeData = flattenTree(TreeViewData);
  return (
    <Fragment>
      <Col sm="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>{"Checkbox Tree"}</H5>
          </CardHeader>
          <CardBody>
            <TreeView
              data={disableTreeData}
              aria-label="Disabled Tree"
              multiSelect
              propagateSelect
              propagateSelectUpwards
              defaultDisabledIds={[2, 3, 4, 5]}
              togglableSelect
              expandedIds={[1, 2, 6, 10]}
              nodeRenderer={({ element, isBranch, isExpanded, isSelected, isDisabled, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
                return (
                  <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1), opacity: isDisabled ? 0.5 : 1, marginTop: 5 }}>
                    {isBranch && <ArrowIcon isOpen={isExpanded} />}
                    <CheckBoxIcon
                      className="checkbox-icon "
                      onClick={(e) => {
                        handleSelect(e);
                        e.stopPropagation();
                      }}
                      variant={isHalfSelected ? "some" : isSelected ? "all" : "none"}
                    />
                    <span className="name">{element.name}</span>
                  </div>
                );
              }}
            />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default CheckboxTree;
