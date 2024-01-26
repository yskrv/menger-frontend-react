import { Link } from "react-router-dom"
import { COURSES_PAGE_ROUTE, FAQ_PAGE_ROUTE, SUPPORT_PAGE_ROUTE } from "../utils/consts"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-header">
                    <div className="footer-part">
                        <div className="footer-logo">Men'ger</div>
                        <p className="footer-text">Халықаралық жетістік тілін үйрену - кең әлемге бір қадам!</p>
                    </div>
                    <div className="footer-part">
                        <p className="footer-text">Қызметтер:</p>
                        <Link to={COURSES_PAGE_ROUTE} className="footer-link">Курстар</Link>
                        <Link to={FAQ_PAGE_ROUTE} className="footer-link">Сұрақ & Жауап</Link>
                        <Link to={SUPPORT_PAGE_ROUTE} className="footer-link">Қолдау Қызметі</Link>
                    </div>
                    <div className="footer-part">
                        <p className="footer-text">Байланыс ақпараты</p>
                        <Link to="/" className="footer-link">+7 (777) 777 77 77</Link>
                        <Link to="/" className="footer-link">support.menger@gmail.com</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-text">2024 &copy; Барлық құқықтар қорғалған</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;