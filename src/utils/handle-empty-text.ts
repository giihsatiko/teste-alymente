export const handleEmptyText = (text: string): string => {
  if (text === '' || text === undefined || text === null) return '???';
  return text;
};
