import { useEffect, useState } from 'react';
import './Weavy.css';

import WeavyContext from './WeavyContext';


const Weavy = ({ children, jwt }) => {

  const [weavy, setWeavy] = useState(null);

  useEffect(() => {
    setWeavy(new window.Weavy({ jwt: jwt, init: false }))
  }, [jwt])

  useEffect(() => {
    if (weavy) {
      weavy.init();
    }

    return () => {
      if (weavy) {
        weavy.destroy();
      }
    }
  }, [weavy])

  return (
    <WeavyContext.Provider value={{ weavy: weavy }}>{children}</WeavyContext.Provider>
  )
}

export default Weavy;
