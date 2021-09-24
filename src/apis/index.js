import axios from "axios";
import { BASE_URL } from "../constants/base";

export const httpRequest = async (method, url, body, headers) => {
  try {
    const _res = await axios({
      method: method,
      url: `${BASE_URL}${url}`,
      data: body,
      headers: {
        "content-type": "application/json",
        ...headers,
      },
    });
    const status = _res.status;
    if (status === 200) {
      return {
        status: _res.status,
        message: "Succesfull",
        data: _res.data,
      };
    }
  } catch (e) {
    return {
      status: e.response.status,
      message: e.response.data.message,
      data: null,
    };
  }
};
