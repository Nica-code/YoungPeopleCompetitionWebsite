import { assetBase } from "@/lib/paths";

export function Partnership() {
  return (
    <section className="partnership-section" aria-labelledby="partnership-title">
      <div className="container">
        <div className="partnership-intro">
          <div>
            <p className="eyebrow eyebrow-light">A shared stage</p>
            <h2 id="partnership-title">A first step into the professional world of music.</h2>
          </div>
          <p>
            Presented by the Woman’s Club of Huntington in partnership with Marshall University School of Music and the Huntington Symphony Orchestra, the competition offers its winner a performance with the Marshall University Symphony Orchestra alongside professional HSO musicians. The side-by-side experience connects young talent with professional players while the Young People’s Concert brings live orchestral music to local students.
          </p>
        </div>

        <div className="partnership-organizations" aria-label="Presenting and partner organizations">
          <div className="partnership-organization partnership-presenter">
            <span className="partnership-role">Presented by</span>
            <strong>The Woman’s Club of Huntington</strong>
          </div>
          <div className="partnership-organization">
            <span className="partnership-role">University partner</span>
            <a href="https://www.marshall.edu/music/" aria-label="Marshall University School of Music website">
              <img className="partnership-marshall" src={`${assetBase}/partners/marshall-school-of-music.png`} alt="Marshall University School of Music logo" width="4669" height="969" loading="lazy" />
            </a>
          </div>
          <div className="partnership-organization">
            <span className="partnership-role">Professional orchestra & prize sponsor</span>
            <a className="partnership-hso" href="https://www.huntingtonsymphony.org/" aria-label="Huntington Symphony Orchestra website">
              <img src={`${assetBase}/partners/huntington-symphony.png`} alt="Huntington Symphony Orchestra logo" width="962" height="960" loading="lazy" />
              <strong>Huntington Symphony Orchestra</strong>
            </a>
          </div>
          <div className="partnership-organization">
            <span className="partnership-role">School partner</span>
            <a href="https://www.cabellschools.com/" aria-label="Cabell County Schools website">
              <img className="partnership-cabell" src={`${assetBase}/partners/cabell-county-schools.png`} alt="Cabell County Schools logo" width="1184" height="1184" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
