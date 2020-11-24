import React from 'react';
import {isUndefined} from 'lodash';
import Routes from './Routes';

const Container: React.FC<any> = (props: any) => {
  const [user, setUser]: any = React.useState({});
  React.useEffect(() => {
    let data = localStorage.getItem('@auth');
    data = data ? JSON.parse(data) : {};
    setUser(data);
  }, [setUser]);

  const currentUser = {
    isAuthenticated: !isUndefined(user.id),
  };

  const childProps = {
    currentUser,
  };
  return <Routes childProps={childProps} />;
};

export default Container;
