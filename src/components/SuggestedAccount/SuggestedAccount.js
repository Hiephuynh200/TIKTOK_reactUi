import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItems';
const cx = classNames.bind(Styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
