import { ReactNode } from 'react';
import { IoBriefcaseOutline, IoHomeOutline, IoCodeSlashSharp, IoContract } from 'react-icons/io5';

export interface ITabItem {
  name: string;
  path: string;
  icon: ReactNode;
}

export type ITabList = ITabItem[];

export const CLASSNAME_TABICON = 'text-white w-6 h-6';
export const TAB_LIST: ITabList = [
  {
    name: 'home',
    path: '/',
    icon: <IoHomeOutline className={CLASSNAME_TABICON} />,
  },
  {
    name: 'work',
    path: '/',
    icon: <IoBriefcaseOutline className={CLASSNAME_TABICON} />,
  },
  {
    name: 'contact',
    path: '/',
    icon: <IoContract className={CLASSNAME_TABICON} />,
  },
];
