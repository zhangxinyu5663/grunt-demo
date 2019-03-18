const expect=require('chai').expect;

describe('天气预报接口测试',function(){
  it('石家庄的天气',function(){
    const http=require('http');

    var city = process.argv[2] || '石家庄';
    var addr='http://v:juhe.cn/weather/index?cityname='+city+'&dtype=&format=&key=29b096b23684548ee83e61a3feabd58f';

    http.get(global.encodeURI(addr), (res) => {
      var result = '';

      res.on('data', (data) => {
          result += data.toString('utf8');       
      });
      res.on('end', () => {
          var weather = JSON.parse(result);
          console.log(weather);        
          expect(weather.resultcode).to.be.equal(200);
      });
    });
  });
});
