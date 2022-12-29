import './index.css';

export default function Content() {
    return(
        <div className="content mx-auto">
            <div className="grid xxl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                <div className="apply-field">
                    <div>
                        <h1 className="arcadia-text">ARCADIA</h1>
                        <h3 className="accelerator-text">WEB3 ACCELERATOR</h3>
                        <p>Premier Web3 Accelerator, providing creators and communities with the tools and services to create a better tomorrow</p>
                        <button type="button" id="apply-button">APPLY NOW</button>
                    </div>
                </div>
                <div>
                    <div className="character-field" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/frame1.png'})`}}>
                        <div className="character" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/character.png'})`}}></div>
                    </div>
                </div>
                <div className="footer-linear"></div>
            </div>            
        </div>
    );
}