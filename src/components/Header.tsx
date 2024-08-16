import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Header: React.FC<{}> = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [streamIsOnline, setStreamIsOnline] = useState();

  async function getOnlineStatus() {
    try {
      const streamStatus = await axios.request({
        url: '/api/twitch/online',
        baseURL: process.env.SITE_URL,
      });
      setStreamIsOnline(streamStatus.data.status);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  useEffect(() => {
    if (streamIsOnline != null) return;
    getOnlineStatus();
  }, [streamIsOnline]);

  return (
    <nav className="px-2 sm:px-4 py-2.5 rounded w-full">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="mr-3 h-6 sm:h-9 flex items-center">
          <Logo></Logo>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark: text-cstyle-highlight">
            <Link href="/">{AppConfig.title}</Link>
          </span>
        </div>

        <div className="flex md:order-2">
          <Link href="https://twitch.tv/Jesski" target="_blank">
            <button type="button" className="">
              Twitch
              {streamIsOnline && (
                <svg height="20" width="20">
                  <circle cx="10" cy="10" r="5" fill="green" />
                </svg>
              )}
            </button>
          </Link>

          <button
            type="button"
            className="md:hidden"
            aria-controls="navbar"
            aria-expanded={isNavExpanded}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          id="navbar"
          className={
            isNavExpanded
              ? 'navigation-menu justify-between items-center w-full md:flex md:w-auto md:order-1'
              : 'navigation-menu hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
          }
        >
          <Navbar>
            <li className="block py-2 pr-4 pl-3  rounded md:bg-transparent md:p-0">
              <Link href="/">Home</Link>
            </li>
            <li className="block py-2 pr-4 pl-3  rounded md:bg-transparent md:p-0">
              <Link href="/about">About</Link>
            </li>
            <li className="block py-2 pr-4 pl-3  rounded md:bg-transparent  md:p-0">
              <Link href="/games">Games</Link>
            </li>
            <li className="block py-2 pr-4 pl-3  rounded md:bg-transparent  md:p-0">
              <Link href="/games/awards">GOTY</Link>
            </li>
          </Navbar>
        </div>
      </div>
    </nav>
  );
};
export { Header };
