export const getAuthToken = () => {
  return localStorage?.AUTH;
};

export const handleAuthentication = (token) => {
  localStorage.setItem("AUTH", token);
};
