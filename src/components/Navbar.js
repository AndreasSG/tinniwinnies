import React from "react";
import { Link } from "gatsby";
const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
          });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <h1 className="is-size-3	has-text-weight-bold	">TinnieWinnies</h1>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about">
                Om kenneln
              </Link>
              <Link className="navbar-item" to="/products">
                Valpar
              </Link>
              <Link className="navbar-item" to="/products">
                Våra hundar
              </Link>
              <Link className="navbar-item" to="/products">
                Dagbok
              </Link>
              <Link className="navbar-item" to="/blog">
                Bilder
              </Link>
              <Link className="navbar-item" to="/products">
                Hundar vi minns
              </Link>
              <Link className="navbar-item" to="/contact">
                Kontakt
              </Link>
            </div>

          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
