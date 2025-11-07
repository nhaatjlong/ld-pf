'use client';
import { TAB_LIST, ITabItem } from '../../../config';
import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

interface NavigatorProps {
  currentTab: string;
  onTabChange: (tabName: string) => void;
}

const Navigator = (props: NavigatorProps) => {
  const handleTabChange = (tabName: string) => props.onTabChange(tabName);

  const bgActiveTab = (tab: string, tabCompare: string) =>
    tab === tabCompare ? 'bg-[#FFFFFF1A]' : 'bg-none';

  const renderTabItem = (item: ITabItem, index: number) => {
    return (
      <ScrollIntoView selector={'#' + item.name}>
        <div
          key={`tab_item_${index}`}
          className={`rounded-full p-3 cursor-pointer transition-all ease-out hover:scale-110 active:scale-95 ${bgActiveTab(
            item.name,
            props.currentTab
          )}`}
          onClick={() => handleTabChange(item.name)}
        >
          {item.icon}
        </div>
      </ScrollIntoView>
    );
  };

  return (
    <div className='flex flex-row lg:flex-col fixed top-0 left-0 bg-[#1A0B2E] lg:top-[100px] lg:left-[100px] items-center rounded-[80px] px-1 py-2 shadow-custom w-fit gap-[5px] select-none'>
      {TAB_LIST.map((tab: ITabItem, index: number) => renderTabItem(tab, index))}
    </div>
  );
};

export { Navigator };
