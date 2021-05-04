import React from "react";
import ListItem from "./ListItem";

const FileList = ({ files, arrowIndex }) => {
  return (
    <div className="list">
      {files.length > 0 ? (
        files.map((file, index) => (
          <ListItem isSelected={index === arrowIndex} key={file.id} {...file} />
        ))
      ) : (
        <div>
          <h3 className="no-result"> No Match found!</h3>
        </div>
      )}
    </div>
  );
};

export default FileList;
