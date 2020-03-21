import React, {Component} from "react";
import './_footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-sections">
                    <div className="newslet">
                        <h3>zapisz się do newsletter</h3>
                        <input type="email" name="email"/><input type="submit" name="submit" value="wyślij"/>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter-square"></i></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright 2019, Made by <a href="https://lucagavri.github.io/Portfolio_Website/"
                                                  target="_blank" rel="noreferrer noopener">LucaGavri</a></p>
                </div>
            </div>
        )

    }
}

export default Footer;
