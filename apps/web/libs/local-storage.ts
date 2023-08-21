import _ from "lodash";

import { isJSON } from "@dnd9-10/shared/src/utils/common";

type StorageType = "newDiaryForm";

function storageFactory(
  setItem: (key: string, value: string) => void,
  getItem: (key: string) => string,
  clear: () => void
) {
  const setStorageItem = (key: StorageType, value: string) => {
    return setItem(key, value);
  };

  const getStringWithDefault = (
    key: StorageType,
    defaultItem: string
  ): string => {
    try {
      const itemString = getItem(key);
      return _.isEmpty(itemString) ? defaultItem : itemString;
    } catch (error) {
      return defaultItem;
    }
  };

  const getBooleanWithDefault = (
    key: StorageType,
    defaultItem: boolean
  ): boolean => {
    try {
      const itemString = getItem(key);
      return _.isEmpty(itemString) ? defaultItem : itemString === "true";
    } catch (error) {
      return defaultItem;
    }
  };

  const getNumberWithDefault = (
    key: StorageType,
    defaultItem: number
  ): number => {
    try {
      const itemString = getItem(key);
      const num = Number(itemString);
      return !_.isNaN(num) ? num : defaultItem;
    } catch (error) {
      return defaultItem;
    }
  };

  const getJSONWithDefault = <T>(key: StorageType, defaultItem: T): T => {
    try {
      const itemJSON = getItem(key);
      if (!isJSON(itemJSON)) {
        return defaultItem;
      }
      return JSON.parse(itemJSON) as T;
    } catch (error) {
      // NOTHING
    }
    return defaultItem;
  };

  const setStorages = {
    setNewDiaryForm: (form: unknown) => {
      setStorageItem("newDiaryForm", JSON.stringify(form));
    },
  };

  const getStorages = {
    getNewDiaryForm: () => {
      const res = JSON.parse(getStringWithDefault("newDiaryForm", null));
      return {
        ...res,
        date: new Date(res.date),
      };
    },
  };

  return {
    ...setStorages,
    ...getStorages,
    setItem,
    getStringWithDefault,
    getBooleanWithDefault,
    getNumberWithDefault,
    getJSONWithDefault,
    clear,
  };
}

export const storage = _.once(() => {
  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const getItem = (key: string) => {
    return localStorage.getItem(key) ?? "";
  };

  const clear = () => {
    return localStorage.clear();
  };
  return storageFactory(setItem, getItem, clear);
});
