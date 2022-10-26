import axios from "../axios/axios";

export const getLists = async (offset, type) => {
  try {
      const res = await axios.get(`${type}-posts?page=${offset}`)
      return res.data
  } catch (err) {
      console.log(err)
  }
}