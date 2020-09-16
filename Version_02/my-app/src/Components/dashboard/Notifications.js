import React from "react";
import moment from "moment";

const Notifications = (props) => {
  const { notification } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notification">
            {notification &&
              notification.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content}</span>
                    <div className="note-date grey-text">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
