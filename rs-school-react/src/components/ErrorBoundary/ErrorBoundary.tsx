import { Component } from 'react';
import './ErrorBoundary.scss';
import { IProps } from '../../types/types';

interface State {
  hasError: boolean;
}

class Container extends Component<IProps, State> {
  state: State = { hasError: false };

  render() {
    if (this.state.hasError) {
      return <div className="container">Something went wrong</div>;
    }

    return this.props.children;
  }
}

export default Container;
