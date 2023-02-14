import '../assets/css/index.css';

function Contact() {


    return (
        <>
            <main id="app">
                <section class="contact">
                    <form action="" method="get">
                        <div class="form__row">
                            <label for="name">Prénom et NOM</label>
                            <div class="form__row__input">
                                <input type="text" name="name" id="name" placeholder="Jon SIMPSON, John DOE, ..." />
                            </div>
                        </div>
                        <div class="form__row">
                            <label for="email">Adresse Email</label>
                            <div class="form__row__input">
                                <input type="email" name="email" id="email" placeholder="jon.simpson@gmail.com" />
                            </div>
                        </div>
                        <div class="form__row">
                            <label for="message">Message</label>
                            <div class="form__row__input">
                                <textarea name="message" id="message" placeholder="Je souhaiterais vous contacter afin ..."></textarea>
                            </div>
                        </div>
                        <div class="form__row">
                            <button>Envoyer</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Contact;