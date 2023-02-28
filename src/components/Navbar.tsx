import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { animateScroll, Link } from 'react-scroll';
import LanguageSelector from './LanguageSelector';
import { useStore } from '@nanostores/react';
import { offset } from '../store';
import {
  FilePdfFilled,
  GithubFilled,
  LinkedinFilled,
  MenuOutlined,
} from '@ant-design/icons';
import i18next from 'i18next';
import i18nextConfig from '../../astro-i18next.config.mjs';
import classNames from 'classnames';

const Navbar = () => {
  const { t } = useTranslation();
  const navbarRef = useRef<HTMLDivElement>(null);
  const $offset = useStore(offset);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    navbarRef.current && offset.set(-navbarRef.current.clientHeight);
  }, [navbarRef]);

  const handleLogoClick = () => {
    setIsOpen(false);
    animateScroll.scrollToTop();
  };

  return (
    <div id="header" ref={navbarRef} className="fixed w-full top-0 left-0 z-20">
      <nav className="border-gray-200 py-2.5 bg-white border">
        <div className="mx-6 flex flex-wrap items-center justify-between">
          <img
            src={
              i18next.language !== i18nextConfig.defaultLocale
                ? '../images/logo.png'
                : 'images/logo.png'
            }
            className="mr-3 h-6 sm:h-9 cursor-pointer hover:border hover:border-blue-400 rounded"
            onClick={handleLogoClick}
            alt="Michael Lee's Logo"
          />

          <div className="flex space-x-2 md:order-2">
            <LanguageSelector />

            <button
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="sr-only">{t('openMainMenu')}</span>
              <MenuOutlined className="flex w-6 h-6 justify-center items-center text-gray-900" />
            </button>
          </div>

          <div
            className={classNames(
              'w-full md:block md:w-auto',
              isOpen ? '' : 'hidden'
            )}
          >
            <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <Link
                  activeClass="text-blue-700"
                  className="hover:text-blue-400"
                  to={t('sections.about')}
                  href={`#${t('sections.about')}`}
                  spy
                  hashSpy
                  smooth
                  duration={500}
                  offset={$offset}
                  isDynamic
                  onClick={() => setIsOpen(false)}
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-blue-700"
                  className="hover:text-blue-400"
                  to={t('sections.workExperience')}
                  href={`#${t('sections.workExperience')}`}
                  spy
                  hashSpy
                  smooth
                  duration={500}
                  offset={$offset}
                  isDynamic
                  onClick={() => setIsOpen(false)}
                >
                  {t('experience')}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-blue-700"
                  className="hover:text-blue-400"
                  to={t('sections.sideProjects')}
                  href={`#${t('sections.sideProjects')}`}
                  spy
                  hashSpy
                  smooth
                  isDynamic
                  duration={500}
                  offset={$offset}
                  onClick={() => setIsOpen(false)}
                >
                  {t('projects')}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-blue-700"
                  className="hover:text-blue-400"
                  to={t('sections.contact')}
                  href={`#${t('sections.contact')}`}
                  spy
                  hashSpy
                  smooth
                  isDynamic
                  duration={500}
                  offset={$offset}
                  onClick={() => setIsOpen(false)}
                >
                  {t('contact')}
                </Link>
              </li>

              <div className="flex space-x-4 border-t-2 md:hidden">
                <a
                  className="hover:text-blue-500"
                  href="https://drive.google.com/uc?export=download&id=14uTJA8ZUPIWCi2V-f8s8ul3-qnQsKfiF"
                  onClick={() => setIsOpen(false)}
                >
                  <FilePdfFilled />
                </a>
                <a
                  className="hover:text-blue-500"
                  href="https://www.linkedin.com/in/michael-lee-8967b614a/"
                  onClick={() => setIsOpen(false)}
                >
                  <LinkedinFilled />
                </a>
                <a
                  className="hover:text-blue-500"
                  href="https://github.com/MichaelMauriceLee"
                  onClick={() => setIsOpen(false)}
                >
                  <GithubFilled />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
