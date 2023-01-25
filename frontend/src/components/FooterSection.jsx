function FooterSection() {
  return (
    <>
        <footer>
        <h2 className="contact-title">Contáctenos:</h2>
        <div className="contact-media">
            <div>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                    <img src="./assets/whatsapp-logo-48-1.png" alt="whatsapp logo"/>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src="./assets/facebook-logo-48-1.png" alt="facebook logo"/>
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src="./assets/instagram-logo-48-1.png" alt="instagram logo"/>
                </a>
            </div>
        </div>

    </footer>

    <section className="dev">
        <p>Todos los derechos reservados. </p><a target="_blank" href="https://github.com/fraancofenoglio" rel="noreferrer"> Franco Fenoglio.</a>
    </section>
    
    </>
  )
}

export default FooterSection