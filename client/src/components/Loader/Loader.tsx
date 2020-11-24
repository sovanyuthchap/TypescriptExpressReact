import React from 'react';
import {IoMdSync} from 'react-icons/io';
import './styles.scss';

export const LoaderRotate = () => {
  return (
    <div className="LoaderRotate">
      <span className="Rotate">
        <IoMdSync fill="#fff" size="34px" />
      </span>
      Loading footage…
    </div>
  );
};
