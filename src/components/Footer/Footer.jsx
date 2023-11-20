import './Footer.css';
const Footer = () =>{
    return (
        <div className="container " id='footer'>
                <footer className="py-3 my-4 ">
                    <ul className="nav justify-content-center my-3 border-bottom pb-3 ">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-dark">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-dark">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-dark">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-dark">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-dark">About</a></li>
                    </ul>
                    <p className="text-center text-body-dark">© 2023 Company, Inc</p>
                </footer>
        </div>
    )
}
export default Footer;