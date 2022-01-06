export const ROUTE_NAMES = {
  root: {
    segment: '',
    full: '/',
    auth: {
      segment: 'auth',
      full: '/auth',
      signup: {
        segment: 'signup',
        full: '/auth/signup',
      },
      signin: {
        segment: 'signin',
        full: '/auth/signin',
      },
      forgot: {
        segment: 'forgot',
        full: '/auth/forgot',
      },
      redirect: {
        segment: 'redirect',
        full: '/auth/redirect',
      },
      created: {
        segment: 'created',
        full: '/auth/created',
      },
      thankyou: {
        segment: 'thankyou',
        full: '/auth/thankyou',
      },
      name: {
        segment: 'name',
        full: '/auth/name',
      },
      error: {
        segment: 'error',
        full: '/auth/error',
      },
      invalid: {
        segment: 'invalid',
        full: '/auth/invalid',
      },
      resend: {
        segment: 'resend',
        full: '/auth/resend',
      },
      deactivated: {
        segment: 'deactivated',
        full: '/auth/deactivated',
      },
    },
    compliance: {
      segment: 'legal',
      full: '/legal',
      tos: {
        segment: 'tos',
        full: '/legal/tos',
      },
      privacy: {
        segment: 'privacy',
        full: '/legal/privacy',
      },
    },
    dashboard: {
      segment: 'dashboard',
      full: '/dashboard',
      init: {
        segment: 'init',
        full: '/dashboard/init',
      },
      settings: {
        segment: 'settings',
        full: '/dashboard/settings',
        options: {
          segment: 'options',
          full: '/dashboard/settings/options',
        },
      },
      report: {
        segment: 'report',
        full: '/dashboard/report',
        snapshot: {
          segment: 'snapshot',
          full: '/dashboard/report/snapshot',
          negative: {
            segment: 'negative',
            full: '/dashboard/report/snapshot/negative',
          },
          forbearance: {
            segment: 'forbearance',
            full: '/dashboard/report/snapshot/forbearance',
          },
          databreach: {
            segment: 'databreach',
            full: '/dashboard/report/snapshot/databreach',
          },
          creditutilization: {
            segment: 'creditutilization',
            full: '/dashboard/report/snapshot/creditutilization',
          },
          creditmix: {
            segment: 'creditmix',
            full: '/dashboard/report/snapshot/creditmix',
          },
          referrals: {
            segment: 'referrals',
            full: '/dashboard/report/snapshot/referrals',
          },
        },
        tradeline: {
          segment: 'tradeline',
          full: '/dashboard/report/tradeline',
        },
        publicitem: {
          segment: 'publicitem',
          full: '/dashboard/report/publicitem',
        },
        personalitem: {
          segment: 'personalitem',
          full: '/dashboard/report/personalitem',
        },
        error: {
          segment: 'error',
          full: '/dashboard/report/error',
        },
      },
      disputes: {
        segment: 'disputes',
        full: '/dashboard/disputes',
        overview: {
          segment: 'overview',
          full: '/dashboard/disputes/overview',
        },
        historical: {
          segment: 'historical',
          full: '/dashboard/disputes/historical',
        },
        findings: {
          segment: 'findings',
          full: '/dashboard/disputes/findings',
        },
        reconfirm: {
          segment: 'reconfirm',
          full: '/dashboard/disputes/reconfirm',
        },
        tradeline: {
          segment: 'tradeline',
          full: '/dashboard/disputes/tradeline',
          error: {
            segment: 'error',
            full: '/dashboard/disputes/tradeline/error',
          },
        },
        personalitem: {
          segment: 'personalitem',
          full: '/dashboard/disputes/personalitem',
          error: {
            segment: 'error',
            full: '/dashboard/disputes/personalitem/error',
          },
        },
        publicitem: {
          segment: 'publicitem',
          full: '/dashboard/disputes/publicitem',

          error: {
            segment: 'error',
            full: '/dashboard/disputes/publicitem/error',
          },
        },
        error: {
          segment: 'error',
          full: '/dashboard/disputes/error',
        },
      },
      error: {
        segment: 'error',
        full: '/dashboard/error',
      },
    },
    onboarding: {
      segment: 'onboarding',
      full: '/onboarding',
      name: {
        segment: 'name',
        full: '/onboarding/name',
      },
      address: {
        segment: 'address',
        full: '/onboarding/address',
      },
      identity: {
        segment: 'identity',
        full: '/onboarding/identity',
      },
      identityfull: {
        segment: 'identityfull',
        full: '/onboarding/identityfull',
      },
      verify: {
        segment: 'verify',
        full: '/onboarding/verify',
      },
      code: {
        segment: 'code',
        full: '/onboarding/code',
      },
      kba: {
        segment: 'kba',
        full: '/onboarding/kba',
      },
      congratulations: {
        segment: 'congratulations',
        full: '/onboarding/congratulations',
      },
      returning: {
        segment: 'returning',
        full: '/onboarding/returning',
      },
      error: {
        segment: 'error',
        full: '/onboarding/error',
      },
      retry: {
        segment: 'retry',
        full: '/onboarding/retry',
      },
    },
    suspended: {
      segment: 'suspended',
      full: '/suspended',
      default: {
        segment: 'default',
        full: '/suspended/default',
      },
    },
  },
};