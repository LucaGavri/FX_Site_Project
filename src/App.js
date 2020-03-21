import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Header from './header/_header.js'
import Marquee from "./marquee/_marquee.js";
import Slider from "./slider/_slider.js";
import Infos from "./infos/_infos.js";
import Footer from "./footer/_footer.js";
import Team from "./team/_team.js";


class App extends Component {
    componentDidMount() {

        //pokazanie btn'a strzałki w gore
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                document.querySelector(".scrollUp").style.display = "block";
            } else {
                document.querySelector(".scrollUp").style.display = "none";
            }
        }

        //przesuwanie w gore z btn'a strzałki w gore
        document.querySelector(".scrollUp").addEventListener("click", function (e) {
            (e).preventDefault();
            document.querySelector('.app').scrollIntoView({
                block: "start",
                inline: "nearest",
                behavior: "smooth"
            });
        });
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <Marquee/>
                <Slider/>
                <Infos/>
                <Team/>
                <Footer/>
                <div className="scrollUp">
                    <i className="fas fa-angle-up"></i>
                </div>
            </div>
        );
    }
}
export default App;
