function keyMirror(args: any, prefix: any = '') {
  const params: any = {};
  for (const key of args) {
    params[key] = prefix + key;
  }

  return params;
}

export const videoOptionTypes = keyMirror(
  ['ACTION', 'CANCEL', 'ADD_NOTE', 'TRIM_AND_EXPORT', 'ADD_INCURSION_EVENT'],
  'VIDEO_OPTIONS_',
);
