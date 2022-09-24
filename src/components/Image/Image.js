import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import Styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(Styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
