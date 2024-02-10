import "./footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="footer__column">
        <div className="footer__authors">
          <div className="footer__author" id="developer">
            <p className="author">Дмитрий Чувашев - developer</p>
          </div>
          {/*<div className="footer__author" id="text__editor">*/}
          {/*  <p className="author">Слобожанин Максим - text editor</p>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="footer__column"></div>
    </footer>
  )
}