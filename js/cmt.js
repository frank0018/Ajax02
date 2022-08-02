// 获取数据列表
function getContent(){
    $.ajax({
        method:'get',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res){
            if(res.status !== 200){
                alert('获取评论列表失败')
                return
            }
            // console.log(res.data);
            // let ul = document.querySelector('ul')
            // ul.innerHTML = ''
            // for(let i=0;i<res.data.length;i++){
            //     let li = document.createElement('li')
            //     li.classList.add('list-group-item')
            //     li.innerHTML = `
            //     <span class="badge" style="background-color: #f0ad4e;">评论时间：${res.data[i].time}</span>
            //     <span class="badge " style="background-color: #4cc7cf;">评论人：${res.data[i].username}</span>
            //     ${res.data[i].content}
            //     `
            //     ul.appendChild(li)
            // }
            let rows = []
            $.each(res.data,function(i,item){
                let str = '<li class="list-group-item"><span class="badge" style="background-color: #f0ad4e;">评论时间：'+item.time+'</span><span class="badge " style="background-color: #4cc7cf;">评论人：'+item.username+'</span>'+item.content+'</li>'
                rows.push(str)
            })

            $('#ullist').empty().append(rows.join(''))
        }
    })
}

getContent()


$(function(){

    // 提交表单数据
    $('#form1').submit(function(e){
        e.preventDefault()
        console.log($('#form1').serialize());
        let data = $('#form1').serialize()
        $.ajax({
            method: 'post',
            url:'http://www.liulongbin.top:3006/api/addcmt',
            data:data,
            success:function (res) {
                console.log(res);
                if(res.status !== 201){
                    alert('发表评论失败')
                    return
                }
            }
        })

        // $.post(
        //     'http://www.liulongbin.top:3006/api/addcmt',
        //     data,
        //     function (res) {
        //         console.log(res);
        //         if(res.status !== 201){
        //             alert('发表评论失败')
        //             return
        //         }
        //     }
        // )

        getContent()
        // $('#form1')[0].reset()
        let form1 = document.querySelector('#form1')
        form1.reset()

    })

})
