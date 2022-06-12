


export const count = state => state.count;
export const test = state => state.test;

const limit = 3
export const recentHistory =  state => {
    const end = state.history.length
    const begin = end - limit <0 ?0 : end-limit
    return state.history.slice(begin,end).join(',')
};