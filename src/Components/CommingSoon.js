import Footer from "./footer";
import Navbar from "./Navbar";
import '../assets/css/CommingSoon.css';

const CommingSoon = () => {
    return ( 
        <div className="mainSection">
            <Navbar />
            <div className="heroSection">
                <hr />
                <p className="greenHydrogenText">
                    Green Hydrogen
                </p>
                <p className="mainText">
                    Comming Soon...
                </p>
                <div className="forDummyText">
                    <p className="dummyText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam alias voluptatum ipsam iste nam tempora enim, cum temporibus esse unde aliquid, fugit inventore, qui amet quos. Et, eum explicabo.
                    Lorem ipsum dolor sit Voluptates.    
                    </p>
                </div>
                <div className="Button">
                <a href="/">
                     <button className="ButtonStyle">
                    
                       Go Back 
                    
                </button>
                </a>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
     );
}
 
export default CommingSoon;