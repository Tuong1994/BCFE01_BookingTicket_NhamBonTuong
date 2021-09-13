import React, { useState } from 'react';
import UserInfoUpdate from './UserInfoUpdate';
import UserBookedHistory from './UserBookedHistory';

function UserContent({ setShowBookedDetail }) {
    const [showContent, setShowContent] = useState(1);

    return (
        <div className="user__content">
            <div className="content__tabs">
                <div className={showContent == 1 ? "tabs__title active" : "tabs__title"} onClick={() => {
                    setShowContent(1)
                }}>Thông tin cá nhân</div>
                <div className={showContent == 2 ? "tabs__title active" : "tabs__title"} onClick={() => {
                    setShowContent(2)
                }}>Lịch sử đặt vé</div>
            </div>
            <div className="content__items">
                <div className={showContent == 1 ? "items show-content" : "items"}>
                    <UserInfoUpdate />
                </div>
                <div className={showContent == 2 ? "items show-content" : "items"}>
                    <UserBookedHistory setShowBookedDetail={setShowBookedDetail} />
                </div>
            </div>
        </div>
    );
}

export default UserContent;