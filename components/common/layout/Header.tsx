// @flow
import * as React from "react";

type Props = {};

export function Header(props: Props) {
  return (
    <header className="header row">
      <div className="header-ui-column col-12">
        <div className="header__registration">
          <a className="registration-button" href="#">
            Регистрация
          </a>
        </div>

        <a className="convex-button login-button hover:no-underline" href="#">
          <span className="convex-button-content">Войти</span>
        </a>
      </div>

      <div className="header-menu-panel col-12">
        <nav>
          <ul className="header-menu list-unstyled">
            <li className="header-menu-item">
              <a className="header-menu-item-link" href="#">
                Всё
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
