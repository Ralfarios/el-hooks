import { ToastContainer } from 'react-toastify';

import { Navbar } from '@/components/navbar';

import st from './language.module.css';
import { useLanguage } from './use-language';
import { useRef } from 'react';

const titleDict = {
  en: 'Language Page',
  id: 'Laman Bahasa',
  es: 'Página de Idioma',
  jp: '言語のページ',
};

const subtitleDict = {
  en: 'We will learn useEffect, useState, and useMemo here.',
  id: 'Kita akan mempelajari useEffect, useState, dan useMemo di sini.',
  es: 'Aprenderemos useEffect, useState y useMemo aquí.',
  jp: 'ここでuseEffectやuseStateやuseMemoなどを学ぶ。',
};

const LanguagePageView = () => {
  const jsRef = useRef();
  const tsRef = useRef();

  const {
    handleCheckboxChange,
    currLang,
    transformedProgLang,
    isLoading,
    showMessage,
    handleChangeLang,
    checkedLangs,
  } = useLanguage({ jsRef, tsRef });

  return (
    <main className={st.main}>
      <Navbar />

      <ToastContainer />

      <section className={st.radios}>
        <span>
          <input
            type="radio"
            id="en"
            name="fav_language"
            value="en"
            checked={currLang === 'en'}
            onChange={({ target }) => handleChangeLang(target?.value)}
          />
          <label htmlFor="en">EN</label>
        </span>
        <span>
          <input
            type="radio"
            id="id"
            name="fav_language"
            value="id"
            checked={currLang === 'id'}
            onChange={({ target }) => handleChangeLang(target?.value)}
          />
          <label htmlFor="id">ID</label>
        </span>
        <span>
          <input
            type="radio"
            id="es"
            name="fav_language"
            value="es"
            checked={currLang === 'es'}
            onChange={({ target }) => handleChangeLang(target?.value)}
          />
          <label htmlFor="es">ES</label>
        </span>
        <span>
          <input
            type="radio"
            id="jp"
            name="fav_language"
            value="jp"
            checked={currLang === 'jp'}
            onChange={({ target }) => handleChangeLang(target?.value)}
          />
          <label htmlFor="jp">JP</label>
        </span>
      </section>

      <section className={st.section}>
        <h1 className={st.title}>{titleDict?.[currLang]}</h1>
        <sub className={st.subtitle}>{subtitleDict?.[currLang]}</sub>

        {!isLoading && (
          <>
            <div className={st.checkboxes}>
              {transformedProgLang?.map(({ value, label }) => (
                <span key={value}>
                  <input
                    type="checkbox"
                    id={value}
                    name={value}
                    value={value}
                    ref={
                      value === 'javascript'
                        ? jsRef
                        : value === 'typescript'
                        ? tsRef
                        : undefined
                    }
                    checked={checkedLangs?.includes(value)}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                  />
                  <label htmlFor={value}>{label}</label>
                </span>
              ))}
              <span>
                <input
                  type="checkbox"
                  id="web_dev"
                  name="web_dev"
                  value="web_dev"
                  checked={
                    checkedLangs?.includes('typescript') &&
                    checkedLangs?.includes('javascript') &&
                    checkedLangs?.includes('css') &&
                    checkedLangs?.includes('php')
                  }
                  onChange={(e) => handleCheckboxChange(e.target.value)}
                />
                <label htmlFor="web_dev">For Web Development</label>
              </span>
            </div>
            <div>
              {showMessage?.javascript && (
                <p>Wow you know JavaScript? Good job!</p>
              )}
              {showMessage?.typescript && (
                <p>
                  Holy moly, you know TypeScript{' '}
                  {showMessage.typescript && showMessage.javascript && (
                    <span>too</span>
                  )}
                  ? Impressive!
                </p>
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default LanguagePageView;
