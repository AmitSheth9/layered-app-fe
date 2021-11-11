import request from 'superagent';
const URL = 'http://localhost:7890';


export async function postStatesDifferential() {
    await request
    .post(`${URL}/api/2019/populationchange`);

} 
export async function getStatesDifferential() {
    const response = await request
    .get(`${URL}/api/2019/populationchange`);
    return response.body;
}