const expect=require('chai').expect;

describe('矩形计算器接口测试套件',function(){
  it('正确矩形参数',function(){
    const http=require('http');

    var addr='http://localhost:8080/rectangle?width=20&height=20';

    http.get(global.encodeURI(addr), (res) => {
      var result = '';

      res.on('data', (data) => {
          result += data.toString('utf8');       
      });
      res.on('end', () => {
          var rectangle = JSON.parse(result);
          console.log(rectangle);        
          expect(rectangle.area).to.be.equal(400);
          expect(rectangle.perimeter).to.be.equal(80);
      });
    });
  });
});
