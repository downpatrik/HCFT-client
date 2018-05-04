import SignIn from '~/pages/sign-in';
import SignUp from '~/pages/sign-up';
import ResetPassword from '~/pages/reset-password';
import CreateNewPassword from '~/pages/create-new-password';
import BuyTokens from '~/pages/buy-tokens';
import CreateWallet from '~/pages/create-wallet';
import Faq from '~/pages/faq';
import News from '~/pages/news';
import Support from '~/pages/support';
import Dashboard from '~/pages/dashboard';
import Withdrawal from '~/pages/withdrawal';
import AppLayout from '~/components/app-layout';
import Translation from '~/components/translation';

import {
  getSignInPagePath,
  getSignUpPagePath,
  getPasswordResetPagePath,
  getNewPasswordCreationPagePath,
  getAppPath,
  getBuyTokensPagePath,
  getWalletCreationPagePath,
  getFaqPagePath,
} from './paths';

const appPrefix = '/app';

export default {
  signin: {
    getPath: getSignInPagePath,
    component: SignIn,
  },

  signup: {
    getPath: getSignUpPagePath,
    component: SignUp,
  },

  sendResetInstructions: {
    getPath: getPasswordResetPagePath,
    component: ResetPassword,
  },

  createNewPassword: {
    getPath: getNewPasswordCreationPagePath,
    component: CreateNewPassword,
  },

  app: {
    getPath: getAppPath,
    component: AppLayout,

    buyTokens: {
      getPath: getBuyTokensPagePath,
      title: () => Translation.text('header:buyTokens'),
      component: BuyTokens,
    },

    createWallet: {
      getPath: getWalletCreationPagePath,
      title: () => Translation.text('header:createWallet'),
      component: CreateWallet,
    },

    faq: {
      getPath: getFaqPagePath,
      title: () => Translation.text('header:forInvestors'),
      component: Faq,
    },

    dashboard: {
      getPath: () => `${appPrefix}/dashboard`,
      title: () => Translation.text('header:dashboard'),
      component: Dashboard,
    },

    news: {
      getPath: () => `${appPrefix}/news`,
      title: () => Translation.text('header:news'),
      component: News,
    },

    support: {
      getPath: () => `${appPrefix}/support`,
      title: () => Translation.text('header:support'),
      component: Support,
    },

    withdrawal: {
      getPath: () => `${appPrefix}/withdrawal`,
      title: () => Translation.text('header:withdrawal'),
      component: Withdrawal,
    },
  },
};
