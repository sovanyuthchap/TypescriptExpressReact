import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import './styles.scss';

class Dashboard extends React.Component {
  constructor(props:any) {
    super(props);
    console.log("Yuth, Dashboard.tsx file, constructor func is called")
  }
  componentDidMount() {
    console.log("Yuth, Dashboard.tsx file, componentDidMount func is called")
  }

  render() {
    return (
      <Container fluid>
        <div className="Dashboard px-4">
          <header className="NavHeader pt-4">
            <h1>Hello Sovanyuth</h1>
          </header>
        </div>
      </Container>
    );
  }
}

const AppDashboard = (props: any) => {
  return (
      <Dashboard {...props} />
  );
};

export default AppDashboard;
