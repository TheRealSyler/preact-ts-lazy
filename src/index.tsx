import { render, h } from 'preact';

let a: any = null;
let b = 0;

const App = () => (
  <div>
    <button
      onClick={() => {
        import('./lazy').then(M => {
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
