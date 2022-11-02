import React from 'react';
import Loader from '../components/Loader';

interface WithLoadingProps {
    loading: boolean,
    color: string,
    size: number | string
};

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, color, size, ...props } = this.props;
      return loading ? <Loader loading={loading} color={color} size={size} /> : <Component {...props as P} />;
    }
  };

export default withLoading;