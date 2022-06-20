import { useContext, useEffect, useRef, useState } from 'react';
import './Weavy.css';
import WeavyContext from './WeavyContext'

const WeavyApp = ({spaceKey, spaceName, appKey, appType, appName}) => {

  const { weavy } = useContext(WeavyContext);
  const [app, setApp] = useState(null);
  const container = useRef();

  const createWeavyApp = async () => {
    const space = weavy.space({
      key: spaceKey,
      name: spaceName
    });

    setApp(space.app({
      key: appKey,
      type: appType,
      name: appName,
      container: container.current
    }));

  };

  useEffect(() => {
    return () => {
      if(app){        
        app.remove();
      }
    }
  }, [app])

  useEffect(() => {
    async function create(){
      await createWeavyApp();
    }

    if(weavy){      
      create();
    }    

  }, [weavy, spaceKey, appKey])

  return (
    <div className="weavy-container" ref={container}></div>
  )
}

export default WeavyApp;
