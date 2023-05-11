const config = {
    local: {
        BUILD_ENV: 'local',
        API_PATH: '/api',
        PUBLIC_PATH: '/',
        DOUBLE_CND: 'https://cdn.rmg.money',
        Proxy: 'http://http.rmg.cash/'
    },
    test: {
        BUILD_ENV: 'test',
        API_PATH: '',
        PUBLIC_PATH: '/',
        DOUBLE_CND: 'https://cdn.rmg.money'
    },
    alpha: {
        BUILD_ENV: 'alpha',
        API_PATH: '',
        PUBLIC_PATH: '/',
        DOUBLE_CND: 'https://cdn.rmg.money'
    },
    beta: {
        BUILD_ENV: 'beta',
        API_PATH: '',
        PUBLIC_PATH: '/',
        DOUBLE_CND: 'https://cdn.rmg.money'
    },
    prod: {
        BUILD_ENV: 'prod',
        API_PATH: '',
        PUBLIC_PATH: '/',
        DOUBLE_CND: 'https://cdn.rmg.money'
    }
}
module.exports = config
