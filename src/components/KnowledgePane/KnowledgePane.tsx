/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import SocialTab from '../common/SocialTab/SocialTab';
import PeopleTab from '../common/PeopleTab/PeopleTab';

import styles from './KnowledgePane.module.scss';

const socials = [
  {
    link: 'https://www.linkedin.com/in/marsudi-b203321ba/',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
  {
    link: 'https://github.com/Marsudii',
    icon: 'github',
    title: 'GitHub',
  },
  {
    link: 'https://www.youtube.com/channel/UCYFfTrR0UdI6S8SQhNqnM_Q',
    icon: 'youtube',
    title: 'YouTube',
  },
  {
    link: 'https://www.instagram.com/marsudi11/',
    icon: 'instagram',
    title: 'Instagram',
  },
  
];

const people = [
  {
    link: 'https://www.google.com/search?q=Bill+Gates',
    icon: 'bgate',
    title: 'Bill Gates',
    description: 'Tokoh Bisnis',
  },
  {
    link: 'https://www.google.com/search?q=jeff+bezos',
    icon: 'bezos',
    title: 'Jeff Bezos',
    description: 'Pengusaha',
  },
  {
    link: 'https://www.google.com/search?q=mark+zuckerberg',
    icon: 'mark',
    title: 'Mark Zuckerberg',
    description: 'Pemrogram',
  },
  {
    link: 'https://www.google.com/search?q=albert+einstein',
    icon: 'albert',
    title: 'Albert Einstein',
    description: 'Fisikawan',
  },
  {
    link: 'https://www.google.com/search?q=al+khawarizmi',
    icon: 'al',
    title: 'Al-Khawarizmi',
    description: 'Ahli matematika',
  },
];

const InfoPanel: React.FC = () => {
  const age = useMemo(
    () =>
      Math.floor(
        (new Date().getTime() - new Date('1999/12/25').getTime()) / 31536000000 // number of ms in a year
      ),
    []
  );

  return (
    <div className={styles.Container}>
      <p className={styles.SocialText} />
      <p>
        Saya adalah seseorang yang dapat bekerja secara individu maupun tim, menyukai tantangan baru, memiliki sifat jujur, kreatif, multitasking dan mudah bergaul serta mudah beradaptasi.
      </p>
      <p>
        <b>Kelahiran: </b> 28 Agustus 1999 (age {age} years),{' '}
        <a
          href="https://id.wikipedia.org/wiki/Kota_Depok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Depok,
          Jawa Barat
        </a>
      </p>
      <p>
        <b>Tinggi: </b> 
        
          175 cm
        
      </p>
        <p>
        <b>Berat: </b> 
        
          80 kg
        
      </p>

      <p>
        <b>Hobi: </b> Programing dan Hiking
      </p>
      <p>
        <b>Pendidikan: </b>{' '}
        <a
          href="http://unpam.ac.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universitas Pamulang
        </a>{' '}
        (2017 - 2021)
      </p>
      <p className={styles.Header}>Profiles</p>
      <div className={styles.SocialContainer}>
        {socials.map((obj) => {
          return <SocialTab {...obj} key={obj.icon} />;
        })}
      </div>
      <p className={styles.Header}>People Also Search For</p>
      <div className={styles.SocialContainer}>
        {people.map((obj) => {
          return <PeopleTab {...obj} key={obj.icon} />;
        })}
      </div>
    </div>
  );
};

export default InfoPanel;
