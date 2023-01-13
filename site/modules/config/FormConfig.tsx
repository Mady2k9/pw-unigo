export enum WidgetTypes {
  'BATCH_FORM' = 'BATCH_FORM',
  'ADMIT_CARD_FORM' = 'ADMIT_CARD_FORM',
}

export const FormRegex: any = {
  [WidgetTypes.BATCH_FORM]: {
    token: {
      pattern: /^[a-zA-Z0-9_.]*$/,
    },
    random_id: {
      pattern: /(.*?)/,
    },

    totalAmount: {
      pattern: /^[0-9]*$/,
    },
    batchSlug: {
      pattern: /^[a-zA-Z0-9-]*$/,
    },
    widget: {
      pattern: /^[A-Z_]*$/,
    },
    fromApp: {
      required: false,
    },
  },
  [WidgetTypes.ADMIT_CARD_FORM]: {
    token: {
      pattern: /^[a-zA-Z0-9_.]*$/,
    },
    random_id: {
      pattern: /(.*?)/,
    },
    form_id: {
      pattern: /^[a-zA-Z0-9]*$/,
    },
  },
}
