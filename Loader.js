import { SyncLoader } from 'react-spinners';

const Loader = () => {
    return (
        <>
            <center>
                <div style={{display:"flex",justifyContent:"center",position:"relative", top:"250px" }}>
                    <SyncLoader
                        color="#4c3228"
                        ariaLabel="tail-spin-loading"
                        loading
                        margin={5}
                        size={20}
                        speedMultiplier={1}
                    />
            </div>
            </center >
        </>
    );
};
export default Loader;