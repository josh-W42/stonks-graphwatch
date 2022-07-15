/**
 * A function that can be used to wait for a given amount of time.
 * @param duration - Time to wait in milliseconds.
 * @returns A Promise that will resolve after the given time.
 */
export const sleep = (duration: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};
