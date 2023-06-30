'use client';
import { TAB_LIST, ITabItem } from '@/config';
import React from 'react';

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
    );
  };

  return (
    <div className='flex flex-col items-center rounded-[80px] px-1 py-2 shadow-custom w-fit gap-[5px]'>
      {TAB_LIST.map((tab: ITabItem, index: number) => renderTabItem(tab, index))}
    </div>
  );
};

export { Navigator };
