declare module "*.gif";
declare module "*.png";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module "*.json" {
  const value: any;
  export default value;
}

interface Window {
  android: {
    postMessage: (jsonData: string) => void;
  };
  Kakao: {
    isInitialized: () => boolean;
    init: (key: string) => void;
    Auth: {
      authorize: (params: { redirectUri: string }) => void;
      getAccessToken: () => string;
      getStatusInfo: () => { status: string };
    };
  };
}
