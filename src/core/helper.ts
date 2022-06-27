
export const getDirection = (dir: string | undefined) => {
  switch (dir) {
    case undefined:
    case 'ltr':
      return 'ltr';
    default:
      return 'rtl';
  }
};