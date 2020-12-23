import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import routes from "./routes";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
// import Loader from "./shared/Loader/Loader";
import Modal from "./shared/Modal/Modal";

class App extends Component {
  state = {
    showModal: false,
  };
  modalToggle = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              )
            )}
          </Switch>
          {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
