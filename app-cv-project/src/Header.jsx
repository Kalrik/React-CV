import { Link } from "react-router-dom";
import './assets/css/index.css';

function Header() {


    return (
        
            <main id="app">
                <header>
                <div class="header">
                    <div class="header__image">
                        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Jon SIMPSON" />
                    </div>
                    <h1 class="header__name">Jon SIMPSON</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/home"}>
                                <a href="./pages/Home.jsx"><span class="material-symbols-outlined"></span><span class="link">Accueil</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/experience"}>
                                <a href="./pages/Experience.jsx"><span class="material-symbols-outlined"></span><span class="link">Experience</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/portfolio"}>
                                <a href="./pages/Portofolio.jsx"><span class="material-symbols-outlined"></span><span class="link">Portfolio</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>
                                <a href="./pages/Contact.jsx"><span class="material-symbols-outlined"></span><span class="link">Contact</span></a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </main>
    )
}

export default Header;