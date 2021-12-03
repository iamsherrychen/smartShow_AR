// //使用 WebSocket 的網址向 Server 開啟連結
// let ws = new WebSocket('ws://20.195.231.99:9000/')

// //開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
// ws.onopen = () => {
//     console.log('open connection')
// }

// //關閉後執行的動作，指定一個 function 會在連結中斷後執行
// ws.onclose = () => {
//     console.log('close connection')
// }
window.env = {
    getWsUrl: function() {
        return 'ws://20.195.231.99:9000';
    }
}