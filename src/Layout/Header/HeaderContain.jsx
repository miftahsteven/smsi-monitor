import React, { Fragment, useEffect, useState } from "react";
import {
  FileText,
  LogIn,
  Mail,
  MoreHorizontal,
  Settings,
  User,
} from "react-feather";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";
import { H6, Image, LI, UL } from "../../AbstractElements";
import UserImg from "../../assets/images/avtar/emoji/9.png";
import Bookmark from "./Bookmark/index";
import ItemCart from "./ItemCart";
import Language from "./Langauge";
import MaxMiniSize from "./MaxMiniSize";
import Message from "./Message";
import MoonLight from "./MoonLight";
import Notification from "./Notification";
import Img from "../../assets/images/user.png";

const HeaderContain = () => {
  const [profile, setProfile] = useState("");
  useEffect(() => {
    setProfile(localStorage.getItem("profileURL") || UserImg);
  }, []);
  const [open, setOpen] = useState(false);
  const onAdd = () => {
    setOpen(!open);
  };

  const logout = () => {
    localStorage.clear();
  };

  // var images = require.context("../../assets/images/", true);
  // const dynamicImage = (image) => {
  //   return images(`./${image}`);
  // };

  return (
    <Fragment>
      <div className="nav-right col pull-right right-menu">
        <UL
          attrUL={{
            className: `simple-list d-flex flex-row nav-menus ${
              open ? "open" : ""
            }`,
          }}
        >
          {/* <LI attrLI={{ className: "onhover-dropdown" }}>
            
            <Language />
          </LI> */}
          {/* <ItemCart /> */}
          {/* <Bookmark /> */}
          {/* <Notification />
          <Message /> */}
          {/* <MoonLight /> */}
          {/* <MaxMiniSize /> */}
          <LI attrLI={{ className: "onhover-dropdown pe-0" }}>
            <Media className="profile-media align-items-center">
              <Image
                attrImage={{
                  className: "rounded-circle",
                  src: Img,
                  alt: "",
                }}
              />
            </Media>
            <UL
              attrUL={{
                className: "simple-list profile-dropdown onhover-show-div",
              }}
            >
              <LI>
                <User />
                <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                  <span>Account </span>
                </Link>
              </LI>
              {/* <LI>
                <Mail />
                <Link to={`${process.env.PUBLIC_URL}/email/mailbox`}>
                  <span>Inbox</span>
                </Link>
              </LI>
              <LI>
                <FileText />
                <Link to={`${process.env.PUBLIC_URL}/todo`}>
                  <span>Taskboard</span>
                </Link>
              </LI>
              <LI>
                <Settings />
                <Link to={`${process.env.PUBLIC_URL}/users/useredit`}>
                  <span>Settings</span>
                </Link>
              </LI> */}
              <LI attrLI={{ onClick: logout }}>
                <Link
                  to={`${process.env.PUBLIC_URL}/login`}
                  className="btn btn-light w-100"
                >
                  <LogIn /> Logout
                </Link>
              </LI>
            </UL>
          </LI>
        </UL>
      </div>
      <div
        className="d-lg-none col mobile-toggle pull-right"
        onClick={() => onAdd()}
      >
        <i>
          <MoreHorizontal />
        </i>
      </div>
    </Fragment>
  );
};
export default HeaderContain;
