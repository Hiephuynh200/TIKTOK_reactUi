import Styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>sidebar</h2>
        </aside>
    );
}

export default Sidebar;
