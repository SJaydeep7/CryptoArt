import React from 'react';
import styles from './Header.module.css';
import ContainerCard from '../ContainerCard/ContainerCard';
import Navbar from '../Nav/Navbar';
import BrickLayout from '../BrickLayout/BrickLayout';
import HeaderBoxes from './HeaderBoxes/HeaderBoxes';
import LoginRoute from '../../ProtectedRoutes/LoginRoute';
import { SearchNormal1 } from 'iconsax-react';
import { Setting4 } from 'iconsax-react';
import JsonHeader from '../../Jsons/HeaderBoxes.json';

const Header = () => {
  return (
    <>
      <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="">
          <Navbar/>
          <div className={styles['blur-circle-shape']}></div>
          <div className={`${styles['headings-header']} flex justify-content-center flex-column `}>
            <h2 className={styles['heading-header-title']}>Be one who changes the world </h2>
            <h1 className={styles['heading-header-second-title']}>
              Artists make The Arts better <br />
              The Arts design the <span>world</span> better
            </h1>
            <HeaderBoxes titles_numbers={JsonHeader.informations} />
          </div>
          <BrickLayout />
        </ContainerCard>
      </header>
    </>
  );
};

export default Header;
