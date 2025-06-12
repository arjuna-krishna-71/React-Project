import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";

function AHome() {
    return (
        <>
            <div>
                <Navbar />
                <h1 className="text-center display-2 text-primary">Admin Home</h1>
            </div>
            <Footer/>
        </>
    )
}
export default AHome;