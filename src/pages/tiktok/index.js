import React, { useState } from 'react';
import Input from '@/components/atoms/Input';

import styles from './tiktok.module.css';

const Tiktok = () => {
  const [url, setUrl] = useState('');

  const handleDownload = (event) => {
    console.log('CLICK');
    // const data = new FormData(event.currentTarget);
    // console.log(data.values);
  };

  return (
    <div className={styles.base}>
      <Input onChange={(e) => setUrl(e.target.value)} type="text" name="url" />
      <button onClick={handleDownload} className={styles.download}>
        Download
      </button>
    </div>
  );
};

export default Tiktok;
