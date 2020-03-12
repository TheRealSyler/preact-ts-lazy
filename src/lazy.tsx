import { h, FunctionComponent } from 'preact';

console.log('LAZY');

interface LazyProps {}

const Lazy: FunctionComponent<LazyProps> = props => {
  const {} = props;

  return <div>LAZY LOADED COMPONENT</div>;
};

export default Lazy;
