import React from "react";
import "./UserInfo.css";

export const UserInfo = ({ image, name, accountType }) => {
  return (
    <>
      <div className="user-info">
        <div className="user-info__description">
          <div className="user-info__name">{name}</div>
          <div className="use-info__account-type">{accountType}</div>
        </div>
        <img src={image} alt="Foto do úsuario" />
      </div>
    </>
  );
};
