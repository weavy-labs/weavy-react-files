import WeavyApp from './weavy/WeavyApp';

export default function Files() {
    return (
        <>
            <div className="weavy-app">
                <WeavyApp
                    spaceKey="react-space"
                    spaceName="React Space"
                    appKey="react-files"
                    appName="Files App"
                    appType="files"
                />
            </div>


        </>


    );
}