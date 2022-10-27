import axios from "../axios/axios";

export const getLists = async (offset, inputText, type) => {
  try {
      const res = await axios.get(`${type}-posts?page=${offset}&search=${inputText}`)
      return res.data
  } catch (err) {
      console.log(err)
  }
}

export const getDetail = async (type, id) => {
  try {
      const res = await axios.get(`${type}-posts/${id}`)
      return res.data
  } catch (err) {
      console.log(err)
  }
}