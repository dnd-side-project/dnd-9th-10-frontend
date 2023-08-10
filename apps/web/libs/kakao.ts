export const initKakao = () => {
  const jsKey = "77b55322759c73e5f5a9dacf781cfa2c";

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(jsKey);
  }
};

export const loginWithKakao = () => {
  window.Kakao.Auth.authorize({
    redirectUri: "/account/kakao/result",
  });
};
