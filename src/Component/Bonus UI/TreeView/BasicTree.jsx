import cx from "classnames";
import React, { Fragment } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { FaCheckSquare, FaMinusSquare, FaSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { TreeViewData } from "../../../Data/Bonus-ui";

export const ArrowIcon = ({ isOpen, className }) => {
  const baseClass = "arrow";
  const classes = cx(baseClass, { [`${baseClass}--closed`]: !isOpen }, { [`${baseClass}--open`]: isOpen }, className);
  return <IoMdArrowDropright className={classes} />;
};

export const CheckBoxIcon = ({ variant, onClick, ...rest }) => {
  switch (variant) {
    case "all":
      return (
        <span onClick={onClick}>
          <FaCheckSquare {...rest} />
        </span>
      );
    case "none":
      return (
        <span onClick={onClick}>
          <FaSquare {...rest} />
        </span>
      );
    case "some":
      return (
        <span onClick={onClick}>
          <FaMinusSquare {...rest} />
        </span>
      );
    default:
      return null;
  }
};

const BasicTree = () => {
  const treeData = flattenTree(TreeViewData);
  return (
    <Fragment>
      <Col sm="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>{"Basic Tree"}</H5>
          </CardHeader>
          <CardBody>
            <TreeView
              data={treeData}
              aria-label="Checkbox tree"
              multiSelect
              propagateSelect
              propagateSelectUpwards
              togglableSelect
              expandedIds={[1, 2, 6, 10]}
              nodeRenderer={({ element, isBranch, isExpanded, isSelected, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
                return (
                  <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1) }}>
                    {isBranch && <ArrowIcon isOpen={isExpanded} />}
                    <CheckBoxIcon
                      className="checkbox-icon"
                      onClick={(e) => {
                        handleSelect(e);
                        e.stopPropagation();
                      }}
                      variant={isHalfSelected ? "some" : isSelected ? "all" : "none"}
                    />
                    <span className="name ms-2">{element.name}</span>
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

export default BasicTree;
