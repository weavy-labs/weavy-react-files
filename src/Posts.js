import WeavyApp from './weavy/WeavyApp';

export default function Posts() {
    return (
        <>
            <div className="weavy-app">
                
                <WeavyApp
                    spaceKey="react-space"
                    spaceName="React Space"
                    appKey="react-posts"
                    appName="Post App"
                    appType="posts"
                />
            </div>


        </>


    );
}