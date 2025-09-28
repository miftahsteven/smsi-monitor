import React, { Fragment, useContext, useEffect } from "react";
import { Input } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import ConfigDB from "../../../../Config/Theme-Config";
import { Fade, FadeBottom, None, RouterAnimation, SildeFade, ZoomFade, ZoomOut } from "../../../../Constant";
import AnimationThemeContext from "../../../../_helper/AnimationTheme";

const AnimationFade = () => {
  const { routerAnimation } = useContext(AnimationThemeContext);
  const layout_animation = localStorage.getItem("animation") || ConfigDB.router_animation;

  useEffect(() => {
    ConfigDB.router_animation = layout_animation;
  }, [layout_animation]);
  const selectAnimation = (e) => {
    routerAnimation(e.target.value);
  };
  return (
    <Fragment>
      <H6>
        {RouterAnimation} {layout_animation}
      </H6>
      <Input type="select" defaultValue={layout_animation} name="selectMulti" onChange={(e) => selectAnimation(e)}>
        <option value="zoomfade">{ZoomFade}</option>
        <option value="slidefade">{SildeFade}</option>
        <option value="fadebottom">{FadeBottom}</option>
        <option value="fade">{Fade}</option>
        <option value="zoomout">{ZoomOut}</option>
        <option value="none">{None}</option>
      </Input>
    </Fragment>
  );
};

export default AnimationFade;
