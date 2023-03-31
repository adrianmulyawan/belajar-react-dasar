import { useState } from 'react';

import('./life-cyle-1.component.css');

const LifeCycleComponent1 = () => {
  const [state, setstate] = useState(0);
  return (
    <>
      <button className='btn' onClick={ setstate.bind(this, state + 1) }>Component Button ({state})</button>
    </>
  );
};

export default LifeCycleComponent1;