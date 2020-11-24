import React from 'react';
import {Switch} from 'react-router-dom';
import {
  AuthenticatedRoute,
  UnauthenticatedRoute,
  LoaderRotate,
} from '../components';

const AsyncDashboard = React.lazy(() => import('./Dashboard'));

interface Props {
  childProps: any;
}
const Routes = (props: Props) => {
  const {childProps} = props;

  return (
    <React.Suspense fallback={<LoaderRotate />}>
      <Switch>
        <UnauthenticatedRoute
          path="/dashboard"
          exact
          component={AsyncDashboard}
          props={childProps}
        />
        <AuthenticatedRoute path="/" props={childProps} component={AsyncDashboard} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
