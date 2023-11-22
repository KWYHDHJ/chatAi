import request from "./request";

export const setMessage = (data: { type: string; value: string }) =>
  request({
    method: "POST",
    url: "/users/setMessage",
    data,
  });

export const setEvaluate = (data: {
  chatId: string;
  type: string;
  problemList: object[];
}) =>
  request({
    method: "POST",
    url: "/users/setEvaluate",
    data,
  });
