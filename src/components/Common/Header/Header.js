import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Logo />

                    </div>
                    <div className="col-8">
                        <Menu />
                    </div>
                    <div className="col-2">
                        <button>send form</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
