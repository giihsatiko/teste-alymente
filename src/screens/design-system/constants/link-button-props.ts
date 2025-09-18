export const LinkButtonProps: { name: string; type: string }[] = [
  { name: '$label', type: 'string' },
  { name: '$url', type: 'string' },
  { name: '$params', type: 'string | undefined' },
  { name: '$iconName', type: 'keyof typeof FontAwesome.glyphMap' },
  { name: '$shouldDecode', type: 'boolean | undefined' },
];
