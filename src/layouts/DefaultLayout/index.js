import classNames from 'classnames/bind';
import Styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(Styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
