import cookie from "js-cookie";

import { isEmpty, isJSON } from "@dnd9-10/shared/src/utils/common";
import { once } from "@dnd9-10/shared/src/utils/function";

type StorageType = "accessToken" | "memberId" | "isShowGuide";

function storageFactory(
  setItem: (key: string, value: string) => void,
  getItem: (key: string) => string,
  clear: (key: string) => void
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
      return isEmpty(itemString) ? defaultItem : itemString;
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
      return isEmpty(itemString) ? defaultItem : itemString === "true";
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
      return !Number.isNaN(num) ? num : defaultItem;
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
    setIsShowGuide: (isShowGuide: string) => {
      setStorageItem("isShowGuide", isShowGuide);
    },
    setAccessToken: (accessToken: string) => {
      setStorageItem("accessToken", accessToken);
    },
    setMemberId: (memberId: string) => {
      setStorageItem("memberId", memberId);
    },
  };

  const getStorages = {
    getAccessToken: () => {
      return getStringWithDefault("accessToken", null);
    },
    getMemberId: () => {
      return getStringWithDefault("memberId", null);
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

export const storage = once(() => {
  const setItem = (key: string, value: string) => {
    return cookie.set(key, value);
  };

  const getItem = (key: string) => {
    return cookie.get(key) ?? "";
  };

  const clear = (key: string) => {
    return cookie.remove(key);
  };
  return storageFactory(setItem, getItem, clear);
});
