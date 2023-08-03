export enum CLASSES {
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  ELEVEN = '11',
}

export const CLASS_MAP = {
  [CLASSES.EIGHT]: 'Class 8th',
  [CLASSES.NINE]: 'Class 9th',
  [CLASSES.TEN]: 'Class 10th',
  [CLASSES.ELEVEN]: 'Class 11th',
}

export const CLASSES_ARRAY = [
  {
    id: CLASSES.EIGHT,
    name: CLASS_MAP[CLASSES.EIGHT],
  },
  {
    id: CLASSES.NINE,
    name: CLASS_MAP[CLASSES.NINE],
  },
  {
    id: CLASSES.TEN,
    name: CLASS_MAP[CLASSES.TEN],
  },
  {
    id: CLASSES.ELEVEN,
    name: CLASS_MAP[CLASSES.ELEVEN],
  },
]
