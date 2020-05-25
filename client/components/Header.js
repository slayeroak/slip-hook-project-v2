import Logo from '../components/Logo';
import Menu from '../components/Menu';

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Menu />
    <style jsx>{`
      .header-wrapper {
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #87807b;
      }
      @media (max-width: 600px) {
        .header-wrapper {
          display: block;
          text-align: center;
          background: #87807b;
        }
      }
    `}</style>
  </div>
);

export default Header;