import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';
import Wrapper from '../Wrapper';
import imageFile from '../../../assets/logos/extended/en/wfp-logo-extended-black-en.svg';
import imageFileSmall from '../../../assets/logos/vertical/en/wfp-logo-vertical-black-en.svg';

const Footer = ({
  className,
  children,
  labelOne,
  linkTextOne,
  linkHrefOne,
  labelTwo,
  linkTextTwo,
  linkHrefTwo,
  metaContent,
  secondary,
  pageWidth,
  ...other
}) => {
  const classNames = classnames(
    'wfp--footer',
    className
  );

  const footer = 
    <footer {...other} className={classNames}>
      <Wrapper pageWidth={pageWidth}>
      <div className="wfp--footer__content">
      {children ? (
        <div className="wfp--footer-info">
          {children}
        </div>
      ) : (
      <div className="wfp--footer-info">
        <div className="wfp--footer-info__item">
          <p className="wfp--footer-label">{labelOne}</p>
          <Link href={linkHrefOne}>{linkTextOne}</Link>
        </div>
        <div className="wfp--footer-info__item">
          <p className="wfp--footer-label">{labelTwo}</p>
          <Link href={linkHrefTwo}>{linkTextTwo}</Link>
        </div>
      </div>
      )}
      <div className="wfp--footer-cta">
        <img className="wfp--footer-cta-logo" src={imageFile} alt="World Food Programme Logo" />
        <img className="wfp--footer-cta-logo-small" src={imageFileSmall} alt="World Food Programme Logo" />
        {secondary}
      </div>
      </div>
      {metaContent &&
        <div className="wfp--footer-meta">
        {metaContent}
        </div>
      }
      </Wrapper>
    </footer>
  ;

  return footer;
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelOne: PropTypes.string,
  linkTextOne: PropTypes.string,
  linkHrefOne: PropTypes.string,
  labelTwo: PropTypes.string,
  linkTextTwo: PropTypes.string,
  linkHrefTwo: PropTypes.string,
  buttonText: PropTypes.string,
};

Footer.defaultProps = {
  labelOne: 'Need Help?',
  linkTextOne: 'Contact Bluemix Sales',
  linkHrefOne: '#',
  labelTwo: 'Estimate Monthly Cost',
  linkTextTwo: 'Cost Calculator',
  linkHrefTwo: '#',
  buttonText: 'Create',
};

export default Footer;