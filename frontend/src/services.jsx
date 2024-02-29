import axios from 'axios'

const url ='http://localhost:3001/'

export function fetchDashboardInfo(param){
    return axios.get(`${url}details`, param)
}