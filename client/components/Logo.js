import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/static/SlipHook_Logo.png" />
      </a>
    </Link>

    <style jsx>{`
      .logo img {
        display: block;
        width: 120px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;