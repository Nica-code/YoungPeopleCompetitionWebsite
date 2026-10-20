import { assetBase } from "@/lib/paths";

export function PartnerMarks() {
  return (
    <div className="partner-marks" aria-label="Presenting and partner organizations">
      <a className="partner-mark partner-mark-marshall" href="https://www.marshall.edu/music/" aria-label="Marshall University School of Music website"><img src={`${assetBase}/partners/marshall-school-of-music.png`} alt="Marshall University School of Music logo" width="4669" height="969" /></a>
      <a className="partner-mark partner-mark-hso" href="https://www.huntingtonsymphony.org/" aria-label="Huntington Symphony Orchestra website"><img src={`${assetBase}/partners/huntington-symphony.png`} alt="Huntington Symphony Orchestra logo" width="962" height="960" /><span>Huntington<br />Symphony Orchestra</span></a>
      <div className="partner-mark partner-mark-presenter"><span>Presented by</span><strong>The Woman’s Club<br />of Huntington</strong></div>
      <a className="partner-mark partner-mark-cabell" href="https://www.cabellschools.com/" aria-label="Cabell County Schools website"><img src={`${assetBase}/partners/cabell-county-schools.png`} alt="Cabell County Schools logo" width="1184" height="1184" /></a>
    </div>
  );
}
