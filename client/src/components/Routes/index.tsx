import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function querystring(name: string, url: string = window.location.href) {
  const newName = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp(`[?&]${newName}(=([^&#]*)|&|#|$)`, 'i');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function nextRoute(props: any, to: string) {
  const redirect = querystring('next', props.location.search);
  return redirect || to;
}

export function replaceRoute(props: {history: any; location: any}, to: string) {
  return props.history.replace(nextRoute(props, to));
}

export function UnauthenticatedRoute({
  component: C,
  props: cProps,
  ...rest
}: any) {
  const redirect = querystring('next');

  return (
    <Route
      {...rest}
      render={(params: any) => {
        const user = cProps.currentUser || {};
        if (user.isAuthenticated) {
          return (
            <Redirect
              to={redirect === '' || redirect === null ? '/' : redirect}
            />
          );
        }

        return <C {...cProps} {...params} />;
      }}
    />
  );
}

export function AuthenticatedRoute({
  component: C,
  props: cProps,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={(params: any) => {
        if (!cProps.currentUser.isAuthenticated) {
          const redirect = `${params.location.pathname}${params.location.search}`;
          return (
            <Redirect
              to={`/dashboard${redirect ? `?next=${redirect}` : ''}`}
            />
          );
        }

        return <C {...cProps} {...params} />;
      }}
    />
  );
}

export function AppliedRoute({component: C, props: cProps, ...rest}: any) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <C {...cProps} {...props} />;
      }}
    />
  );
}

export function PermissionRoute(props: any) {
  const {currentUser} = props.props;

  // if (props.permission && props.permission(currentUser)) {
  //   return <AppliedRoute {...props} />;
  // }

  if (currentUser.isAuthenticated) {
    return <AuthenticatedRoute {...props} />;
  }

  return <h1 className="text-center py-5">No permission</h1>;
}
