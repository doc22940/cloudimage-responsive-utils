export const processParams = (params) => {
  let resultParams = undefined;

  try {
    resultParams = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
  } catch (e) {}

  if (!resultParams) {
    resultParams = params;
  }

  return resultParams;
};