import React from 'react';
import deleteCross from "../assets/delete-cross.png";

const DeleteInputButton = ({clearInput}) => {
    return (
        <button type="button" onClick={()=>clearInput()}>
        <img src={deleteCross} width="10" alt="delete input button" />
      </button>
    );
};

export default DeleteInputButton;