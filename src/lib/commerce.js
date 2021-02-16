import Commerce from '@chec/commerce.js';

// creating a new Instance from commerce
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY,true);