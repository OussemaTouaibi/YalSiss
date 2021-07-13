import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GIIcons from 'react-icons/gi';

import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Vêtements',
    path: '/overview',
    icon: <GIIcons.GiClothes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Hommes',
        path: '/overview/users',
        icon: <IoIcons.IoIosMan />
      },
      {
        title: 'Femmes',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosWoman />
      },
      {
        title: 'Enfants',
        path: '/overview/revenue',
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
    path: '/reports',
    icon: <GIIcons.GiSmartphone />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'téléphones & Tablettes',
        path: '/reports/reports1',
        icon: <FaIcons.FaTabletAlt />,
        cName: 'sub-nav'
      },
      {
        title: 'Ordinateurs & TVs',
        path: '/reports/reports2',
        icon: <FaIcons.FaLaptop />,
        cName: 'sub-nav'
      },
      {
        title: 'Others ...',
        path: '/reports/reports3',
        icon: <FaIcons.FaPlus />
      }
    ]
  },
  {
    title: 'Maison & Bureau',
    path: '/products',
    icon: <GIIcons.GiSofa />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Meubles',
        path: '/messages/message1',
        icon: <GIIcons.GiDesk />
      },
      {
        title: 'Décoration',
        path: '/messages/message2',
        icon: <GIIcons.GiColumnVase />
      }
    ]
  },
  {
    title: 'Santé & beauté',
    path: '/messages',
    icon: <GIIcons.GiHealing />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Parfums',
        path: '/messages/message1',
        icon: <GIIcons.GiPerfumeBottle />
      },
      {
        title: 'Maquillage',
        path: '/messages/message2',
        icon: <GIIcons.GiLipstick />
      }
    ]
  }
];