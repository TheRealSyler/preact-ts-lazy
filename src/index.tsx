import { render, h } from 'preact';
import { Suspense, lazy } from 'preact/compat';

let a: any = null;
let b = 0;

const SomeComponent = lazy(() => import(/*webpackChunkName: 'lazy'*/ './lazy'));

const App = () => (
  <div>
    <Suspense fallback={<div>loading...</div>}>
      <div>{a !== null ? <SomeComponent /> : null}</div>
    </Suspense>
    <button
      onClick={() => {
        import(/*webpackChunkName: 'lazy'*/ './lazy').then(M => {
          console.log('LOADED COMPONENT');
          a = <M.default />;
          b++;
          render(<App></App>, document.body);
        });
      }}
    >
      test
    </button>
    {a} {b}
  </div>
);

render(<App></App>, document.body);
