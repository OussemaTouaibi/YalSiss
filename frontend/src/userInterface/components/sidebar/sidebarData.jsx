import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GIIcons from 'react-icons/gi';

import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Vêtements',
    path: '/',
    icon: <GIIcons.GiClothes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Hommes',
        path: '/Homme',
        icon: <IoIcons.IoIosMan />
      },
      {
        title: 'Femmes',
        path: '/',
        icon: <IoIcons.IoIosWoman />
      },
      {
        title: 'Enfants',
        path: '/',
        icon: <FaIcons.FaChild />
      },
      {
        title: 'Accesoires',
        path: '/overview/revenue',
        icon: <FaIcons.FaShoppingBag />
      }
    ]
  },
  {
    title: 'Électroniques',
    path: '/',
    icon: <GIIcons.GiSmartphone />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'téléphones & Tablettes',
        path: '/',
        icon: <FaIcons.FaTabletAlt />,
        cName: 'sub-nav'
      },
      {
        title: 'Ordinateurs & TVs',
        path: '/',
        icon: <FaIcons.FaLaptop />,
        cName: 'sub-nav'
      },
      {
        title: 'Others ...',
        path: '/',
        icon: <FaIcons.FaPlus />
      }
    ]
  },
  {
    title: 'Maison & Bureau',
    path: '/',
    icon: <GIIcons.GiSofa />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Meubles',
        path: '/',
        icon: <GIIcons.GiDesk />
      },
      {
        title: 'Décoration',
        path: '/',
        icon: <GIIcons.GiColumnVase />
      }
    ]
  },
  {
    title: 'Santé & beauté',
    path: '/',
    icon: <GIIcons.GiHealing />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Parfums',
        path: '/',
        icon: <GIIcons.GiPerfumeBottle />
      },
      {
        title: 'Maquillage',
        path: '/',
        icon: <GIIcons.GiLipstick />
      }
    ]
  }
];