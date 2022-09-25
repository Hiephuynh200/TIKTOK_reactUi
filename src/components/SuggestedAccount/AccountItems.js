import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Styles from './SuggestedAccount.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(Styles);

function AccountItems() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[500, 0]} render={renderPreview} placement="bottom" offset={[-20, 0]}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fbf85c2f32f7ea2d4babb120c403ef44~c5_100x100.jpeg?x-expires=1664240400&x-signature=rEXsILsk8COA2bfhS5S9nWXzI0E%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hieuthuhai2222</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>HUNDRED</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItems.propTypes = {};

export default AccountItems;
