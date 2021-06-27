export const isLocalStorageAvailable = (): boolean => {
  if (!window?.localStorage) {
    return false;
  }

  try {
    window.localStorage.setItem('foo.bar', 'foo');
    window.localStorage.removeItem('foo.bar');
  } catch (e) {
    return false;
  }
  return true;
};

export const isSessionStorageAvailable = (): boolean => {
  if (!window?.sessionStorage) {
    return false;
  }

  try {
    window.sessionStorage.setItem('foo.bar', 'foo');
    window.sessionStorage.removeItem('foo.bar');
  } catch (e) {
    return false;
  }
  return true;
};

export const removeProtocol = (v: string) =>
  v.replace('https://', '').replace('http://', '');
