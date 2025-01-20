'use client';
import { useState, useEffect, useCallback } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Mode = ({ children }: { children: React.ReactNode }) => {
  const [activeHour, setActiveHour] = useState<number | null>(8);

  function getHourMode(index: number): 'dark' | 'light' {
    return index % 9 < 4 ? 'dark' : 'light';
  }

  function isDarkModeActive(): boolean {
    return activeHour !== null && getHourMode(activeHour) === 'dark';
  }

  function generateGroupItems(groupStartIndex: number): number[] {
    return [groupStartIndex, groupStartIndex + 1, groupStartIndex + 2];
  }

  const handleHourClick = useCallback((index: number) => {
    setActiveHour(prevActiveHour => (prevActiveHour === index ? prevActiveHour : index));
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkModeActive());
  }, [activeHour]);

  return (
    <div className="mx-auto mt-9">
      {children}
      <div className="flex w-full mb-6 relative">
        {Array.from({ length: 8 }).map((_, groupIndex) => {
          const groupStartIndex = groupIndex * 3;

          return (
            <div key={groupIndex} className="flex w-full justify-between group items-end">
              {generateGroupItems(groupStartIndex).map((index, itemIndex) => {
                const mode = getHourMode(index);

                function getDynamicHeight(): string {
                  if (index === activeHour) return 'h-14'; // Set height for active hour
                  if (itemIndex === 0) return 'h-9';
                  if (itemIndex === 1) return 'h-12';
                  return 'h-9';
                }

                return (
                  <div key={index} className="flex-1 relative">
                    <div
                      className="group flex flex-col-reverse gap-5 justify-center items-center relative cursor-pointer transition-opacity duration-300 ease-linear"
                      role="button"
                      onClick={() => handleHourClick(index)}
                    >
                      <div className="flex justify-center w-full">
                        <div
                          className={`w-1 transition-all duration-300 ease-linear rounded-sm ${mode === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} ${getDynamicHeight()} group-hover:h-12`}
                        />
                      </div>

                      {activeHour === index && (
                        <div className="opacity-100 transition-opacity duration-300">
                          {mode === 'dark' ? (
                            <FaMoon size={40} className="text-gray-500 bg-white p-2 rounded-full" />
                          ) : (
                            <FaSun size={40} className="bg-accent p-2 rounded-full text-secondary" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mode;
