import React, {Component} from "react";
import './_infos.scss';
import {data} from '../data/data.json';


class Infos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            items: data
        })
    }

    render() {
        var {isLoaded, items} = this.state;

        if (!isLoaded) {
            return <div>loading...</div>
        } else {
            return (
                    <div className="infos">
                        <h3 className="infos-head">
                            informacje ze świata
                        </h3>
                        <div className="info-sections">
                            <div className="info-section">
                                <div className="info-img">
                                    <img src={items[4].image_url}/>
                                </div>
                                <div className="info-header-and-text">
                                    <div className="info-head">
                                        {console.log(items)}
                                        {items[4].title}
                                    </div>
                                    <div className="info-text">
                                        {items[4].text}
                                    </div>
                                    <div className='btn'>
                                        <a href={items[4].news_url} target="_blank" rel="nofollow">
                                            <button>czytaj więcej</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info-section">
                                <div className="info-img">
                                    <img src={items[10].image_url}/>
                                </div>
                                <div className="info-header-and-text">
                                    <div className="info-head">
                                        {console.log(items)}
                                        {items[10].title}
                                    </div>
                                    <div className="info-text">
                                        {items[10].text}
                                    </div>
                                    <div className='btn'>
                                        <a href={items[10].news_url} target="_blank" rel="nofollow">
                                            <button>czytaj więcej</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info-section">
                                <div className="info-img">
                                    <img src={items[13].image_url}/>
                                </div>
                                <div className="info-header-and-text">
                                    <div className="info-head">
                                        {console.log(items)}
                                        {items[13].title}
                                    </div>
                                    <div className="info-text">
                                        {items[13].text}
                                    </div>
                                    <div className='btn'>
                                        <a href={items[13].news_url} target="_blank" rel="nofollow">
                                            <button>czytaj więcej</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info-section">
                                <div className="info-img">
                                    <img src={items[27].image_url}/>
                                </div>
                                <div className="info-header-and-text">
                                    <div className="info-head">
                                        {items[27].title}
                                    </div>
                                    <div className="info-text">
                                        {items[27].text}
                                    </div>
                                    <div className='btn'>
                                        <a href={items[27].news_url} target="_blank" rel="nofollow">
                                            <button>czytaj więcej</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
    }
}


export default Infos;
