var http = require('http'); //đọc, thực thi, xử lý…đối tượng
var server = http.createServer(function (req, res) { //tạo server nhận request từ client
    //noi dung sever
    res.writeHead(200, { 'Content-Type': 'text.html' });//gởi “header data” cho client
    res.write("Hello Word");//in noi dung ra html
    res.end('ADMIN PHAM MINH DUC '); //kết thúc ghi 
});
server.listen(3000); //tao server o cong 3000, xác định port thực thi
