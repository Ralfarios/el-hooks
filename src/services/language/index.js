import data from '@/repo/progLang.json';

export const getLanguages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
