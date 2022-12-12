import { Navbar } from '@/components/navbar';
import { useRef, useState } from 'react';

import st from './form.module.css';

const FormPageView = () => {
  const fullNameRef = useRef();
  // const emailRef = useRef();
  const [email,setEmail] = useState('')

  console.log('rerender?');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fullNameRef?.current?.value);

    // TODO: useStateとuseRefを比較してフォーム データを取得する
  };

  return (
    <main className={st.main}>
      <Navbar />

      <section className={st.section}>
        <h1 className={st.title}>FORM</h1>
        <sub className={st.subtitle}>
          The proper way to use useRef, and useState.
        </sub>

        <div className={st.wrapper}>
          <form className={st.form} onSubmit={handleSubmit}>
            <span className={st.form__item}>
              <label htmlFor="full_name" className={st.form__label}>
                <span className={st.form__label__name}>Full Name</span>
                <span className={st.form__label__type}>string;</span>
              </label>

              <span style={{ display: 'flex', gap: '0.5em' }}>
                <span className={st.form__chevron}>&gt;</span>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className={st.form__field}
                  ref={fullNameRef}
                  defaultValue="hello"
                />
              </span>
            </span>

            <span className={st.form__item}>
              <label htmlFor="email" className={st.form__label}>
                <span className={st.form__label__name}>Email</span>
                <span className={st.form__label__type}>string;</span>
              </label>

              <span style={{ display: 'flex', gap: '0.5em' }}>
                <span className={st.form__chevron}>&gt;</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={st.form__field}
                  // ref={emailRef}
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue="email@mail.co"
                />
              </span>
            </span>

            <span className={st.form__item}>
              <label htmlFor="age" className={st.form__label}>
                <span className={st.form__label__name}>Age</span>
                <span className={st.form__label__type}>number;</span>
              </label>

              <span style={{ display: 'flex', gap: '0.5em' }}>
                <span className={st.form__chevron}>&gt;</span>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className={st.form__field}
                />
              </span>
            </span>

            <span className={st.form__item}>
              <label htmlFor="phone_number" className={st.form__label}>
                <span className={st.form__label__name}>Phone Number</span>
                <span className={st.form__label__type}>tel;</span>
              </label>

              <span style={{ display: 'flex', gap: '0.5em' }}>
                <span className={st.form__chevron}>&gt;</span>
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  className={st.form__field}
                />
              </span>
            </span>

            <button className={st.form__button} type="submit">
              Submit
              <span className={st.form__button__circle}>&rarr;</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FormPageView;
