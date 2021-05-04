import React from "react";
import moment from "moment";
import { AiFillFolder, AiOutlineFile, AiOutlineRight } from "react-icons/ai";

const ListItem = ({ type, name, comment, modified_time, isSelected }) => {
  return (
    <React.Fragment>
      <div className={`list-item ${isSelected ? "active" : ""}`}>
        {isSelected ? (
          <AiOutlineRight color="#0366d6" />
        ) : (
          <div className="pad"></div>
        )}
        <div className="file">
          <span className="file-icon">
            {type === "folder" ? (
              <AiFillFolder color="#79b8ff" size="20" />
            ) : (
              <AiOutlineFile size="18" />
            )}
          </span>
          <span
            className="label"
            dangerouslySetInnerHTML={{ __html: name }}
          ></span>
        </div>
        <div className="comment">{comment}</div>
        <div className="time" title={modified_time}>
          {moment(modified_time).fromNow()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListItem;
