const Header = document.createElement('header');
const Main = document.createElement('main')

const appHeader = `<header>
    <p>
    <h1>Entregable <span>DOM</span> <i>(JavaScript)</i></h1>
    </p>
    <h2>Tema libre: Log in de aplicaciones</h2>
</header>`

const appMain = `<main>
<p>A continuación vas a encontrar los links para realizar el log in de: <b>Facebook</b> , <i>Instagram</i> y <i>Twitter</i> (actualmente "X").
        </p>
        <br>
    </main>
    <article>
        <section>
            <p>Facebook</p>
            <a href="https://m.facebook.com/login/?locale=es_LA">Facebook</a>
        </section>
        <section>
            <p>Instagram</p>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1">Instagram</a>
        </section>
        <section>
            <p>Twitter (X)</p>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZXMifQ%3D%3D%22%7D">Twitter (X)</a>
        </section>
    </article>
    <footer>
        <h3>¿Les ha gustado?</h3>
        <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Si</label><br/>
        <input type="checkbox" id="cbox2" value="second_checkbox"/><label for="cbox2"> No</label>
    </footer>
        <section>
            <h4>Lista de personas que han usado este medio: </h4>
            <i>Manuel Garay</i>
            <p>Lorenzo Noli</p>
            <i>Santiago Sepulveda</i>
        </section>
</main>`

Header.innerHTML = appHeader;
Main.innerHTML = appMain;

document.body.appendChild(Header);
document.body.appendChild(Main);

