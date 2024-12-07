import axios from "axios";

export const verifyStudent = async ({email, school}) => {
    const response = await axios.post("/auth/student/verify", {
        email,
        univ_name: school
      })
    return response.data;
}

export const confirmCode = async ({email, school, code}) => {
    const response = await axios.post("/auth/student/confirm", {
        email,
        univ_name: school,
        code
      })
    return response.data;
}

export const submitSignup = async ({email, password, nickname}) => {
    const response = await axios.post("/signup", {
        email,
        password,
        nickname,
      })
    return response.data;
}