import { useState } from 'react';
import logo from './../images/logo.svg';

export default function Header() {
  return (
    <header className="top-0 left-0 header-pattern-mobile p-4 flex flex-col gap-8 rounded-bl-[5rem]">
      <NavBar />
      <HeaderContent />
    </header>
  );
}

const NavBar = () => {
  const navigation = [
    {
      name: 'Product',
      sublinks: [
        {
          name: 'Overview',
          href: '#',
        },
        {
          name: 'Pricing',
          href: '#',
        },
        {
          name: 'Marketplace',
          href: '#',
        },
        {
          name: 'Overview',
          href: '#',
        },
        {
          name: 'Integrations',
          href: '#',
        },
      ],
    },
    {
      name: 'Company',
      sublinks: [
        {
          name: 'About',
          href: '#',
        },
        {
          name: 'Team',
          href: '#',
        },
        {
          name: 'Blogs',
          href: '#',
        },
        {
          name: 'Careers',
          href: '#',
        },
      ],
    },
    {
      name: 'Connect',
      sublinks: [
        {
          name: 'Contact',
          href: '#',
        },
        {
          name: 'Newsletter',
          href: '#',
        },
        {
          name: 'LinkedIn',
          href: '#',
        },
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState([false, false, false]);

  const setActiveNavItem = index => {
    setActive(prev => {
      return prev.map((item, ind) => {
        if (ind == index) {
          return !item;
        } else {
          return false;
        }
      });
    });
  };

  return (
    <nav className="flex flex-row items-center justify-between font-display p-4 md:px-16">
      <a href="#">
        <img className="w-2/3" src={logo} alt="Blogr Logo"></img>
      </a>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <span className="sr-only">Open Menu</span>
        {open ? (
          <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
          </svg>
        )}
      </button>

      <div className="hidden md:flex flex-row justify-between w-full mx-8 items-center">
        <ul className="flex flex-row gap-10 items-center">
          {navigation.map((navItem, index) => {
            return (
              <NavItemDesktop
                key={index}
                open={active[index]}
                onClick={() => setActiveNavItem(index)}
                title={navItem.name}
                items={navItem.sublinks}
              />
            );
          })}
        </ul>

        <LoginAndSignup />
      </div>

      <div
        data-open={open}
        className="data-[open=false]:hidden data-[open=true]:visible absolute w-11/12 top-[15%] left-0 right-0 mx-auto shadow-xl bg-white rounded-md p-6 md:hidden"
      >
        <ul className="flex flex-col justify-center items-center gap-6">
          {navigation.map((navItem, index) => {
            console.log(navItem);
            return (
              <NavItemMobile
                key={index}
                open={active[index]}
                onClick={() => setActiveNavItem(index)}
                title={navItem.name}
                items={navItem.sublinks}
              />
            );
          })}
        </ul>

        <div className="w-full bg-blue-50 h-[1px] my-6"></div>

        <LoginAndSignup />
      </div>
    </nav>
  );
};

const HeaderContent = () => {
  return (
    <div className="text-white font-heading font-light flex flex-col justify-center items-center text-center gap-4 pt-16 pb-28">
      <h1 className="text-3xl lg:text-5xl">A modern publishing platform</h1>
      <p className="font-body font-normal lg:text-xl">
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
      className="font-body font-bold border px-4 py-2 border-white rounded-full bg-white text-red-200 text-sm hover:bg-red-50 hover:border-none hover:text-white lg:text-xl"
      href="#"
    >
      {props.children}
    </a>
  );
};

const Button = props => {
  return (
    <a
      className="font-body font-bold border px-4 py-2 border-white rounded-full bg-transparent text-white text-sm
      hover:bg-white hover:text-red-100 hover:font-bold lg:text-xl  "
      href="#"
    >
      {props.children}
    </a>
  );
};

const NavItemMobile = props => {
  return (
    <li className="w-full flex flex-col gap-4 items-center">
      <button
        onClick={props.onClick}
        data-open={props.open}
        className="flex flex-row items-center gap-2 text-blue-800 font-display text-lg font-semibold md:text-white md:text-sm"
      >
        {props.title}
        <svg
          data-open={props.open}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          className="stroke-red-100 data-[open=false]:rotate-0 data-[open=true]:-rotate-180 transition-transform duration-300 md:stroke-white"
        >
          <path fill="none" strokeWidth="2" d="M1 1l4 4 4-4" />
        </svg>
      </button>
      <div
        data-open={props.open}
        className="w-full data-[open=false]:hidden data-[open=true]:visible bg-blue-50 rounded-md text-blue-400 font-body font-medium py-4"
      >
        <ul className="flex flex-col justify-center items-center gap-4">
          {props.items.map(item => {
            return (
              <li>
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

const NavItemDesktop = props => {
  return (
    <li
      key={props.key}
      onClick={props.onClick}
      className="relative flex flex-col gap-4 items-center"
    >
      <button
        data-open={props.open}
        className="flex flex-row items-center gap-2 text-blue-800 font-display text-lg font-semibold md:text-white md:text-sm hover:underline lg:text-xl"
      >
        {props.title}
        <svg
          data-open={props.open}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          className="stroke-red-100 data-[open=false]:rotate-0 data-[open=true]:-rotate-180 transition-transform duration-300 md:stroke-white"
        >
          <path fill="none" strokeWidth="2" d="M1 1l4 4 4-4" />
        </svg>
      </button>
      <div
        data-open={props.open}
        className="absolute bg-white p-4 top-[130%] w-32 data-[open=false]:hidden data-[open=true]:visible rounded-md py-4"
      >
        <ul className="flex flex-col justify-center items-start gap-4">
          {props.items.map(item => {
            return (
              <li className="text-blue-800 font-body font-medium text-sm hover:font-semibold lg:text-lg">
                <a href={item.href}>{item.name}</a>
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
    <div className="flex flex-col gap-2 justify-center items-center md:flex-row md:gap-4 ">
      <a
        className="font-heading text-blue-800 text-lg font-semibold md:text-white md:text-sm md:hover:underline lg:text-lg"
        href="#"
      >
        Login
      </a>
      <a
        className="font-body font-medium w-28 text-center text-white px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 rounded-full md:bg-none md:bg-white md:text-red-100 md:text-sm hover:font-bold md:hover:bg-red-50 md:hover:text-white lg:text-lg"
        href="#"
      >
        Sign Up
      </a>
    </div>
  );
};
