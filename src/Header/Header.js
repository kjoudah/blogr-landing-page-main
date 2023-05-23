import { useState } from 'react';
import logo from './../images/logo.svg';
export default function Header() {
  return (
    <header className="sticky top-0 left-0 header-pattern-mobile p-4 flex flex-col gap-8 rounded-bl-[5rem]">
      <NavBar />
      <HeaderContent />
    </header>
  );
}

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row items-center justify-between font-display">
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="absolute h-screen w-screen inset-0 bg-transparent"
          ></div>
        )}
        <a href="#">
          <img className="w-2/3" src={logo} alt="Blogr Logo"></img>
        </a>
        <button className="" onClick={() => setOpen(!open)}>
          <span className="sr-only">Open Menu</span>
          {open ? (
            <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z"
                fill="#FFF"
                fill-rule="evenodd"
              />
            </svg>
          ) : (
            <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
              </g>
            </svg>
          )}
        </button>
        <MobileMenu open={open} />
      </div>
    </>
  );
};

const HeaderContent = () => {
  return (
    <div className="text-white font-heading font-light flex flex-col justify-center items-center text-center gap-4 pt-16 pb-28">
      <h1 className="text-3xl">A modern publishing platform</h1>
      <p className="font-body font-normal">
        Grow your audience and build your online brand
      </p>
      <div className="flex flex-row gap-4">
        <CallToActionButton buttonText="Start For Free">
          Start For Free
        </CallToActionButton>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

const CallToActionButton = props => {
  return (
    <a
      className="font-body font-bold border px-4 py-2 border-white rounded-full bg-white text-red-200 text-sm"
      href="#"
    >
      {props.children}
    </a>
  );
};

const Button = props => {
  return (
    <a
      className="font-body font-bold border px-4 py-2 border-white rounded-full bg-transparent text-white text-sm"
      href="#"
    >
      {props.children}
    </a>
  );
};

const MobileMenu = props => {
  return (
    <div
      data-open={props.open}
      className="data-[open=false]:hidden data-[open=true]:visible absolute w-11/12 top-[15%] left-0 right-0 mx-auto shadow-xl bg-white rounded-md p-6 "
    >
      <ul className="flex flex-col justify-center items-center gap-6">
        <NavItemMobile
          title="Product"
          items={[
            'Overview',
            'Pricing',
            'Marketplace',
            'Features',
            'Integrations',
          ]}
        />
        <NavItemMobile
          title="Company"
          items={['About', 'Team', 'Blog', 'Careers']}
        />
        <NavItemMobile
          title="Connect"
          items={['Contact', 'Newsletter', 'LinkedIn']}
        />
      </ul>

      <div className="w-full bg-blue-50 h-[1px] my-6"></div>

      <LoginAndSignup />
    </div>
  );
};

const NavItemMobile = props => {
  const [open, setOpen] = useState(false);

  return (
    <li className="w-full flex flex-col gap-4 items-center">
      <button
        onClick={() => setOpen(!open)}
        data-open={open}
        className="flex flex-row items-center gap-2 text-blue-800 font-display text-lg font-semibold"
      >
        {props.title}
        <svg
          data-open={open}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          className="data-[open=false]:rotate-0 data-[open=true]:-rotate-180 transition-transform duration-300"
        >
          <path
            fill="none"
            stroke="#FF7B86"
            stroke-width="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>
      <div
        data-open={open}
        className="w-full data-[open=false]:hidden data-[open=true]:visible bg-blue-50 rounded-md text-blue-400 font-body font-medium py-4"
      >
        <ul className="flex flex-col justify-center items-center gap-4">
          {props.items.map(item => {
            return (
              <li>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

const LoginAndSignup = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <a className="font-heading text-blue-800 text-lg font-semibold" href="#">
        Login
      </a>
      <a
        className="font-body font-medium w-28 text-center text-white px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 rounded-full"
        href="#"
      >
        Sign Up
      </a>
    </div>
  );
};
