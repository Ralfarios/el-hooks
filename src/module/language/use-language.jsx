import { useEffect, useMemo, useState } from 'react';

import { toast } from 'react-toastify';

import { getLanguages } from '@/services/language';

const toastDict = {
  en: 'Changed to English',
  id: 'Diubah menjadi Bhs. Indonesia',
  es: 'Cambiado a Español',
  jp: '日本語に変更しました',
};

const web_dev_opt = ['css', 'javascript', 'php', 'typescript'];

export const useLanguage = ({ jsRef, tsRef }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [checkedLangs, setCheckedLangs] = useState([]);
  const [showMessage, setShowMessage] = useState({
    javascript: false,
    typescript: false,
  });

  const [currLang, setCurrLang] = useState('en');
  const [progLang, setProgLang] = useState([]);

  const transformedProgLang = useMemo(
    () =>
      progLang
        ?.sort((a, b) => a.localeCompare(b))
        ?.map((lang) => ({ value: lang.toLowerCase(), label: lang })),
    [progLang]
  );

  const fetchProgrammingLanguages = async (mounted) => {
    setIsLoading(true);
    try {
      const { records } = await getLanguages();

      if (mounted) {
        setProgLang(records);
      }
    } catch (error) {
      // Handle Error
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    fetchProgrammingLanguages(mounted);

    return () => {
      mounted = false;
    };
  }, []);

  const handleChangeLang = (value) => {
    toast.success(toastDict?.[value] || 'Unknown Language', {
      autoClose: 2000,
    });
    setCurrLang(value);
  };

  const webDevDiff = web_dev_opt.diff(checkedLangs);

  const handleChangeMessage = () => {
    // * Supposed to be this code,
    // * but for tutorial sake,
    // * we go full noob.
    // setShowMessage({
    //   typescript: checkedLangs.includes('typescript'),
    //   javascript: checkedLangs.includes('javascript'),
    // });

    // ! ❌ NOT SO GOOD WAY
    setShowMessage((prev) => ({
      ...prev,
      javascript: jsRef.current.checked,
    }));

    setShowMessage((prev) => ({
      ...prev,
      typescript: tsRef.current.checked,
    }));
  };

  const handleCheckboxChange = (value) => {
    if (['javascript', 'typescript'].includes(value)) {
      handleChangeMessage();
    }

    if (value === 'web_dev') {
      return setCheckedLangs((prev) => {
        if (webDevDiff?.length < web_dev_opt.length)
          return [...new Set([...prev, ...web_dev_opt])];

        return [...prev].filter((e) => !web_dev_opt.includes(e));
      });
    }

    return setCheckedLangs((prev) => {
      const isChecked = prev.indexOf(value) > -1;
      if (!isChecked) return [...prev, value];

      return [...prev].filter((e) => e !== value);
    });
  };

  return {
    handleCheckboxChange,
    checkedLangs,
    currLang,
    transformedProgLang,
    isLoading,
    showMessage,
    jsRef,
    tsRef,
    handleChangeLang,
  };
};
