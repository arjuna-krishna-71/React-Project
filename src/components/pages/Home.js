import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
    return (
        <>
            <div>
                <Navbar />
                <h1 className="text-center display-2 text-primary"> Home </h1>
            </div>
            <Footer/>
        </>
    )
}
export default Home;