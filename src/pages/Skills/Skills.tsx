/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FadeIn from 'react-fade-in';
import ResultsArray from './ResultsArray';

import styles from './Skills.module.scss';
import SkillsResult from '../../components/common/SkillsResult/SkillsResult';
import LoadTime from '../../components/common/LoadTime/LoadTime';

const Skills: React.FC = () => {
  return (
    <div className="page-container">
      <FadeIn delay={200}>
        <LoadTime length={ResultsArray.length} />
      </FadeIn>
      <div className={styles.Flex}>
        <div className="results-container">
          <FadeIn delay={140}>
            {ResultsArray.map((result, i) => {
              return typeof result === 'string' ? (
                <h2 key={i}>{result}</h2>
              ) : (
                <SkillsResult {...result} key={i} />
              );
            })}
          </FadeIn>
        </div>
        <FadeIn delay={500}>
          <div className={styles.side}>
            <span>Ahli (Proficient) : </span>
            <span>
              Di level ini, seorang praktisi mulai memahami prinsip-prinsip (kaidah) di balik teknik yang mereka gunakan. Sehingga mereka lebih fleksibel dalam menggunakan teknik-teknik yang mereka kuasai.
            </span>
            <br />
            <span>Mampu (Competent): </span>
            <span>
              Di level ini, seorang praktisi mulai memahami konteks, kapan sebuah teknik efektif dilakukan dan kapan sebuah teknik tidak efektif dilakukan. Mereka secara sadar mampu menganalisis teknik yang mereka gunakan.
            </span>
            <br />
            <span>Pemula (Beginner): </span>
            <span>
              Di level ini, seorang praktisi akan mengikuti teknik-teknik yang mereka kuasai secara kaku. Mereka masih harus berpikir untuk mengeksekusi keterampilannya dengan baik.
              
            </span>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Skills;
