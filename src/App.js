import './App.css';
import React from "react"
import { ComposableMap, Geographies, Geography, Graticule, Line, Annotation} from "react-simple-maps"

function App() {
    const beijing = [116.3833, 39.9166];
    const hk = [114.1772, 22.3027];
    const singapore = [103.8519, 1.2902];
    const paris = [2.3490, 48.8647];
    const barcelona = [2.1540, 41.3902];
    const moscow = [37.6184, 55.7512];
  return (
    <div className="App">
        <ComposableMap
            projection="geoEqualEarth"
        >
            <Graticule stroke="#DDD" />
            <Geographies
                geography="/features.json"
                fill="#D6D6DA"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            {/*beijing - hk*/}
            <Line
                from={beijing}
                to={hk}
                stroke="#008000"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Annotation
                subject={[(beijing[0]+hk[0])/2, (beijing[1]+hk[1])/2]}
                dx={-10}
                dy={-10}
            >
                <text x="-5" textAnchor="end" alignmentBaseline="middle" fill="#F53" fontSize={12}>
                    {"APCN2"}
                </text>
            </Annotation>
            {/*singapore - hk*/}
            <Line
                from={singapore}
                to={hk}
                stroke="#008000"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Annotation
                subject={[(singapore[0]+hk[0])/2, (singapore[1]+hk[1])/2]}
                dx={-10}
                dy={-10}
            >
                <text x="-5" textAnchor="end" alignmentBaseline="middle" fill="#F53" fontSize={12}>
                    {"SMW3"}
                </text>
            </Annotation>
            {/*paris - barcelona*/}
            <Line
                from={paris}
                to={barcelona}
                stroke="#FF5533"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Annotation
                subject={[(paris[0]+barcelona[0])/2, (paris[1]+barcelona[1])/2]}
                dx={-10}
                dy={-10}
            >
                <text x="-5" textAnchor="end" alignmentBaseline="middle" fill="#F53" fontSize={12}>
                    {"SMW3"}
                </text>
            </Annotation>
            {/*moscow - hk*/}
            <Line
                from={moscow}
                to={hk}
                stroke="#FF5533"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Annotation
                subject={[(moscow[0]+hk[0])/2, (moscow[1]+hk[1])/2]}
                dx={10}
                dy={-10}
            >
                <text x="-5" textAnchor="end" alignmentBaseline="middle" fill="#F53" fontSize={12}>
                    {"NCP"}
                </text>
            </Annotation>
        </ComposableMap>
    </div>
  );
}

export default App;
