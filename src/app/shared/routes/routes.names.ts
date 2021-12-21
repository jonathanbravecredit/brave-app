export const ROUTE_NAMES = {
  root: {
    segment: "",
    full: "/",
    children: {
      auth: {
        segment: "auth",
        full: "/auth",
        children: {
          signup: {
            segment: "signup",
            full: "/auth/signup",
            children: {},
          },
          signin: {
            segment: "signin",
            full: "/auth/signin",
            children: {},
          },
          forgot: {
            segment: "forgot",
            full: "/auth/forgot",
            children: {},
          },
          redirect: {
            segment: "redirect",
            full: "/auth/redirect",
            children: {},
          },
          created: {
            segment: "created",
            full: "/auth/created",
            children: {},
          },
          thankyou: {
            segment: "thankyou",
            full: "/auth/thankyou",
            children: {},
          },
          name: {
            segment: "name",
            full: "/auth/name",
            children: {},
          },
          error: {
            segment: "error",
            full: "/auth/error",
            children: {},
          },
          invalid: {
            segment: "invalid",
            full: "/auth/invalid",
            children: {},
          },
          resend: {
            segment: "resend",
            full: "/auth/resend",
            children: {},
          },
          deactivated: {
            segment: "deactivated",
            full: "/auth/deactivated",
            children: {},
          },
        },
      },
      compliance: {
        segment: "legal",
        full: "/legal",
        children: {
          tos: {
            segment: "tos",
            full: "/legal/tos",
            children: {},
          },
          privacy: {
            segment: "privacy",
            full: "/legal/privacy",
            children: {},
          },
        },
      },
      dashboard: {
        segment: "dashboard",
        full: "/dashboard",
        children: {
          init: {
            segment: "init",
            full: "/dashboard/init",
            children: {},
          },
          settings: {
            segment: "settings",
            full: "/dashboard/settings",
            children: {
              options: {
                segment: "options",
                full: "/dashboard/settings/options",
                children: {},
              },
            },
          },
          report: {
            segment: "report",
            full: "/dashboard/report",
            children: {
              snapshot: {
                segment: "snapshot",
                full: "/dashboard/report/snapshot",
                children: {
                  negative: {
                    segment: "negative",
                    full: "/dashboard/report/snapshot/negative",
                    children: {},
                  },
                  forbearance: {
                    segment: "forbearance",
                    full: "/dashboard/report/snapshot/forbearance",
                    children: {},
                  },
                  databreach: {
                    segment: "databreach",
                    full: "/dashboard/report/snapshot/databreach",
                    children: {},
                  },
                  creditutilization: {
                    segment: "creditutilization",
                    full: "/dashboard/report/snapshot/creditutilization",
                    children: {},
                  },
                  creditmix: {
                    segment: "creditmix",
                    full: "/dashboard/report/snapshot/creditmix",
                    children: {},
                  },
                  referrals: {
                    segment: "referrals",
                    full: "/dashboard/report/snapshot/referrals",
                    children: {},
                  },
                },
              },
              tradeline: {
                segment: "tradeline",
                full: "/dashboard/report/publicitem",
                children: {},
              },
              publicitem: {
                segment: "publicitem",
                full: "/dashboard/report/publicitem",
                children: {},
              },
              personalitem: {
                segment: "personalitem",
                full: "/dashboard/report/personalitem",
                children: {},
              },
              error: {
                segment: "error",
                full: "/dashboard/report/error",
                children: {},
              },
            },
          },
          disputes: {
            segment: "disputes",
            full: "/dashboard/disputes",
            children: {},
          },
          error: {
            segment: "error",
            full: "/dashboard/error",
            children: {},
          },
        },
      },
      onboarding: {
        segment: "onboarding",
        full: "/onboarding",
        children: {
          name: {
            segment: "name",
            full: "/onboarding/name",
            children: {},
          },
          address: {
            segment: "address",
            full: "/onboarding/address",
            children: {},
          },
          identity: {
            segment: "identity",
            full: "/onboarding/identity",
            children: {},
          },
          identityfull: {
            segment: "identityfull",
            full: "/onboarding/identityfull",
            children: {},
          },
          verify: {
            segment: "verify",
            full: "/onboarding/verify",
            children: {},
          },
          code: {
            segment: "code",
            full: "/onboarding/code",
            children: {},
          },
          kba: {
            segment: "kba",
            full: "/onboarding/kba",
            children: {},
          },
          congratulations: {
            segment: "congratulations",
            full: "/onboarding/congratulations",
            children: {},
          },
          returning: {
            segment: "returning",
            full: "/onboarding/returning",
            children: {},
          },
          error: {
            segment: "error",
            full: "/onboarding/error",
            children: {},
          },
          retry: {
            segment: "retry",
            full: "/onboarding/retry",
            children: {},
          },
        },
      },
      suspended: {
        segment: "suspended",
        full: "/suspended",
        children: {
          default: {
            segment: "default",
            full: "/suspended/default",
            children: {},
          },
        },
      },
    },
  },
};
