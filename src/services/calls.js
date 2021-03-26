import api from './api';
export const getHousesCall = async () =>{
    try {
        const result = await api.get('properties/v2/list-for-rent', {
            query:{
                city: 'Miami',
                state_code: 'FL',
                limit: 15,
                offset,
                sort: 'relevance',
            },
        });
        return result.data;
    } catch (error) {
        return error
    }
}