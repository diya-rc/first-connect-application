import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Bonelli 3',
  entryPointUriPath,
  cloudIdentifier: 'gcp-us',
  env: {
    development: {
      initialProjectKey: 'bonelli-3',
    },
    production: {
      applicationId: 'cm8ee7im7003fqw01wnie8jwh',
      url: 'https://mc.us-central1.gcp.commercetools.com/',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Custom Message',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  // submenuLinks: [
  //   {
  //     uriPath: 'channels',
  //     defaultLabel: 'Channels',
  //     labelAllLocales: [],
  //     permissions: [PERMISSIONS.View],
  //   },
  // ],
};

export default config;
