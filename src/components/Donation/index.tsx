"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import BankQR from '../../../public/assets/qr/bank-qr.jpg';
import EsewaQR from '../../../public/assets/qr/esewa-qr.jpg';
import Title from '../Title';

const Donation: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Nepali rupees. Bank transfer');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.donation}>
      <Title
        mainTitle=''
        subtitle='You can make donations for the needs of our ashram'
        extended
        wide
      />
      <select className={styles.select} value={selectedOption} onChange={handleChange}>
        <option value="Nepali rupees. Bank transfer">Nepali rupees. Bank transfer</option>
        <option value="Nepali rupees. Esewa wallet">Nepali rupees. Esewa wallet</option>
        <option value="Russian roubles">Russian roubles</option>
        <option value="Ukrainian hryvnia">Ukrainian hryvnia</option>
      </select>
      {selectedOption === 'Nepali rupees. Bank transfer' && (
        <Image src={BankQR} alt="Donation" width={200} height={250} />
      )}
      {selectedOption === 'Nepali rupees. Esewa wallet' && (
        <Image src={EsewaQR} alt="Esewa Donation" width={200} height={250} />
      )}
      {selectedOption === 'Russian roubles' && (
        <div className={styles.details}>
          <h3>Перевод на карту Мир:</h3>
          <p>Банк: Россельхозбанк</p>
          <p>Номер карты: 2200380354349391</p>
          <p>Получатель: Искандер М.</p>
        </div>
      )}
      {selectedOption === 'Ukrainian hryvnia' && (
        <div className={styles.details}>
          <h3>Реквізити для переказу в гривнях:</h3>
          <p>Банк: Raiffeisen</p>
          <p>Номер картки: 4149500113973641</p>
        </div>
      )}
    </div>
  );
};

export default Donation;
