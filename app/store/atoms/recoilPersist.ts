"use client"
import { atom, selector } from 'recoil';

export const persistAtom = <T>(key: string, defaultValue: T) => {
  const persistedAtom = atom<T>({
    key,
    default: defaultValue,
  });

  const persistedSelector = selector<T>({
    key: `${key}PersistedSelector`,
    get: ({ get }) => {
      const persistedValue = localStorage.getItem(key);
      return persistedValue ? JSON.parse(persistedValue) : get(persistedAtom);
    },
    set: ({ set }, newValue) => {
      set(persistedAtom, newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
  });

  return [persistedAtom, persistedSelector] as const;
};
