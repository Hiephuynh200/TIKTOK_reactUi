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

export default Image;
