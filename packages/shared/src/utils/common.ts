export function delay(ms = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });
}

export function isJSON(str: string) {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === "object" && obj !== null) {
      return true;
    }
  } catch (err) {
    // NOTHING
  }
  return false;
}

export const getValue = <T>(func: () => T, defaultValue: T) => {
  try {
    return func();
  } catch (error) {
    return defaultValue;
  }
};
