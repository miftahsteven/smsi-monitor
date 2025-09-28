import React, { Fragment, useContext, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./Footer/index";
import TapTop from "./TapTop/index";
import Header from "./Header";
import SideBarLayout from "./SideBar-Layout";
import Themecustomizer from "./ThemeCustomizer";
import CheckContext from "../_helper/customizer";
import ProductContext from "../_helper/ecommerce/product";
import AnimationThemeContext from "../_helper/AnimationTheme";
import ConfigDB from "../Config/Theme-Config";
import Loader from "./Loader";
import 'leaflet/dist/leaflet.css';

//import 'tippy.js/dist/tippy.css';
//import 'tippy.js/animations/scale.css';

const Layout = ({ children, classNames, ...rest }) => {
  const { setIsVertical } = useContext(ProductContext);
  const { sidebar_types, settings, setIconShow, toggleIcon, setToggleIcon, defaultClass, setDefaultClass } = useContext(CheckContext);
  const settings1 = localStorage.getItem("sidebar_Settings") || settings;
  const sidebar_types1 = localStorage.getItem("sidebar_types") || sidebar_types;
  const location = useLocation();
  const { animation } = useContext(AnimationThemeContext);
  const animationTheme = localStorage.getItem("animation") || animation || ConfigDB.router_animation;
  const nodeRef = useRef(null);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 991) {
      setToggleIcon(true);
    } else {
      setToggleIcon(false);
    }
    if (window.innerWidth <= 575) {
      setIconShow(true);
    } else {
      setIconShow(false);
    }
    if (window.innerWidth <= 1200) {
      setIsVertical(true);
    } else {
      setIsVertical(false);
    }
    if (window.innerWidth <= 992) {
      setDefaultClass(true);
    } else setDefaultClass(false);
  });

  return (
    <Fragment>
      <Loader />
      <TapTop />
      <div className={`page-wrapper ${!defaultClass ? sidebar_types1 : "compact-wrapper"} ${settings1}`} id='pageWrapper'>
        <div className={`page-main-header ${toggleIcon ? "close_icon" : ""}`}>
          <Header />
        </div>
        <div className='page-body-wrapper horizontal-menu'>
          <header className={`main-nav ${toggleIcon ? "close_icon" : ""}`}>
            <SideBarLayout />
          </header>
          <div className='page-body' ref={nodeRef}>
            <TransitionGroup {...rest}>
              <CSSTransition key={location.key} timeout={100} classNames={animationTheme} unmountOnExit nodeRef={nodeRef}>
                <div>
                  <Outlet />
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
        </div>
      </div>
      {/* <Themecustomizer /> */}
      <ToastContainer />
    </Fragment>
  );
};
export default Layout;
