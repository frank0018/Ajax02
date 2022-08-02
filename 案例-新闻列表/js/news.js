$(function(){

    // 定义时间过滤器 来处理时间各式
    template.defaults.imports.xgtime = function(data){
        let data1 = new Date(data)
        return data1.toLocaleString()
      }




// 获取数据
function getData(){
$.get('http://www.liulongbin.top:3006/api/news',function(res){
    if(res.status !==200){
        alert('获取新闻失败')
        return
    }
    console.log(res);
    for(let i=0;i<res.data.length;i++){
        res.data[i].tags = res.data[i].tags.split(',')
    }
    // 处理时间各式
    // for(let i=0;i<res.data.length;i++){
    //     res.data[i].time = new Date(res.data[i].time).toLocaleString()
    // }


    let htmlstr = template('tpl-news',res)
    $('#news-list').html(htmlstr)

})

}
getData()


})