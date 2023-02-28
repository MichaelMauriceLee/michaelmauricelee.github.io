import { Navbar } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { animateScroll, Link } from 'react-scroll';
import LanguageSelector from './LanguageSelector';
import { useStore } from '@nanostores/react';
import { offset } from '../store';
import { FilePdfFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';
import i18next from 'i18next';
import i18nextConfig from '../../astro-i18next.config.mjs';

const Header = () => {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  const $offset = useStore(offset);

  useEffect(() => {
    headerRef.current && offset.set(-headerRef.current.clientHeight);
  }, [headerRef]);

  return (
    <div id="header" ref={headerRef} className="fixed w-full top-0 left-0 z-20">
      <Navbar fluid border>
        <img
          src={
            i18next.language !== i18nextConfig.defaultLocale
              ? '../images/logo.png'
              : 'images/logo.png'
          }
          className="mr-3 h-6 sm:h-9 cursor-pointer"
          onClick={animateScroll.scrollToTop}
          alt="Michael Lee's Logo"
        />
        <div className="flex space-x-2 md:order-2">
          <LanguageSelector />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
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
            >
              {t('contact')}
            </Link>
          </li>
          <div className="flex space-x-4 border-t-2 md:hidden">
            <a
              className="hover:text-blue-500"
              href="https://drive.google.com/uc?export=download&id=14uTJA8ZUPIWCi2V-f8s8ul3-qnQsKfiF"
            >
              <FilePdfFilled />
            </a>
            <a
              className="hover:text-blue-500"
              href="https://www.linkedin.com/in/michael-lee-8967b614a/"
            >
              <LinkedinFilled />
            </a>
            <a
              className="hover:text-blue-500"
              href="https://github.com/MichaelMauriceLee"
            >
              <GithubFilled />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
