import React, {Component} from "react";
import './_marquee.scss';

class Marquee extends Component {
    render() {
        return (

            <div className="marquee">
                <div className="marquee-text">
                    dji:26783.49 <span>nasdaq:8141.79</span> s&p:2979.63
                    dax:12436.55 ftse:7356.47 atx:2986,39 <span>ibex:9273.90 cac:5572.10</span> nikkei:21565.15
                    eur/usd:1.1205 eur/gbp:0.8990 <span>usd/cad:1.3125</span> dji:26783.49 nasdaq:8141.79 s&p:2979.63
                    dax:12436.55 <span>ftse:7356.47</span> atx:2986,39 <span>ibex:9273.90 cac:5572.10</span> nikkei:21565.15
                    eur/usd:1.1205 eur/gbp:0.8990 usd/cad:1.3125 dji:26783.49 nasdaq:8141.79 s&p:2979.63
                    dax:12436.55 <span>ftse:7356.47 atx:2986,39 ibex:9273.90 cac:5572.10</span> nikkei:21565.15
                    eur/usd:1.1205 eur/gbp:0.8990 usd/cad:1.3125
                </div>
            </div>
        )
    }
}

export default Marquee;
