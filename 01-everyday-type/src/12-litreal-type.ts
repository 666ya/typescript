function handleRequest(url?: string, method?: 'GET' | 'POST') {
    console.log(method)
}
// error
// const req = {
//     url: 'wwww.baidu.com',
//     method: 'GET'
// }
// handleRequest(req.url,req.method) 

// 方法1
// const req = {
//     url: 'wwww.baidu.com',
//     method: 'GET' as 'GET'
// }
// handleRequest(req.url,req.method) 

// 方法2
// const req = {
//     url: 'wwww.baidu.com',
//     method: 'GET'
// }
// handleRequest(req.url,req.method as 'GET') 

// 方法3
const req = {
    url: 'wwww.baidu.com',
    method: 'GET'
} as const
handleRequest(req.url,req.method as 'GET') 


