import fetch from 'unfetch';

const checkStatus = (response) => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}
const baseURL="api/students/";
export const getAllStudent = () => {
    return  fetch(baseURL)
        .then(checkStatus);
}
export const addNewStudent=student=>{
    return fetch(baseURL,
        {
            headers:{'Content-Type':'application/json'},
            method: 'POST',
            body:JSON.stringify(student)
        }).then(checkStatus);
}
export const deleteStudent=(studentId)=>{
    return fetch(baseURL+studentId,
        {
            method: 'DELETE',
        }).then(checkStatus)
}