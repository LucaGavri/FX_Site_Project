import React, {Component} from "react";
import './_marquee.scss';

class Marquee extends Component {
    render() {
        return (

            <div className="marquee">
                <div className="marquee-interior">
                    <marquee scrolldelay="150" behavior="scroll">dji:26783.49  nasdaq:8141.79  s&p:2979.63  dax:12436.55  ftse:7356.47  atx:2986,39  ibex:9273.90  cac:5572.10  nikkei:21565.15  eur/usd:1.1205  eur/gbp:0.8990  usd/cad:1.3125  dji:26783.49  nasdaq:8141.79  s&p:2979.63  dax:12436.55  ftse:7356.47  atx:2986,39  ibex:9273.90  cac:5572.10  nikkei:21565.15  eur/usd:1.1205  eur/gbp:0.8990  usd/cad:1.3125  dji:26783.49  nasdaq:8141.79  s&p:2979.63  dax:12436.55  ftse:7356.47  atx:2986,39  ibex:9273.90  cac:5572.10  nikkei:21565.15  eur/usd:1.1205  eur/gbp:0.8990  usd/cad:1.3125</marquee>
                </div>
            </div>
        )
    }
}

export default Marquee;
