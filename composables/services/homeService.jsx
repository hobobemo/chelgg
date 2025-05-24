const getSettings = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
};

const postSettings = {
    headers: {
        'Content-Type': 'application/json' 
    }
};

export default {
    getCounts() {
        return $fetch(getApi() + '/counts', getSettings)
    },
};