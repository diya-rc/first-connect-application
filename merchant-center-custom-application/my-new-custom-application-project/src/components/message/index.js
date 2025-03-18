import { lazy } from 'react';

const Message = lazy(() =>
  import('./message' /* webpackChunkName: "welcome" */)
);

export default Message;
