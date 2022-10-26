import axios from "../axios/axios";

export const getA = async (offset) => {
  try {
      console.log(offset)
      const res = await axios.get(`a-posts?page=${offset}`)
      return res.data
  } catch (err) {
      console.log(err)
  }
}

export const getB = async () => {
  try {
      const res = await axios.get('b-posts?page=0')
      return res
  } catch (err) {
      console.log(err)
  }
}