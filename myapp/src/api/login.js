import axios from "axios";
export default {
  loginEntries: () => axios.get("/dashboard/entries"),
  loginDic: () => axios.get("/dic/all")
};
