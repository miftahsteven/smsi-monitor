import { Link } from "react-router-dom";
import { FaceBookSVG, GoogleSVG, InstagramSVG, TwitterSVG } from "../../Data/svgIcons";

export const SocialLoginLinks = () => (
    <ul className='login-social'>
      <li>
        <Link to='https://www.google.com/' target='_blank'>
          <GoogleSVG />
        </Link>
      </li>
      <li>
        <Link to='https://twitter.com/' target='_blank'>
          <TwitterSVG />
        </Link>
      </li>
      <li>
        <Link to='https://www.instagram.com/' target='_blank'>
          <InstagramSVG />
        </Link>
      </li>
      <li>
        <Link to='https://www.facebook.com/' target='_blank'>
          <FaceBookSVG />
        </Link>
      </li>
    </ul>
  );