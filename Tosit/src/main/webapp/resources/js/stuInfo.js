function loadStuInfo() {
    $.ajax({
        type:'get',
        url:'/AllStudent.do',
        dataType:'json',
        success: function (data) {
            var arr = $.parseJSON(data);
            var content = "<table class=\"table-hover\" style=\"border:1px;width: 100%\">\n" +
                "            <thead>\n" +
                "                 <tr>\n" +
                "                     <th>学号</th>\n" +
                "                     <th>姓名</th>\n" +
                "                     <th>密码</th>\n" +
               /* "                     <th>班号</th>\n" +
                "                     <th>组号</th>\n" +*/
                "                     <th>操作</th>\n" +
                "                  </tr>\n" +
                "            </thead>";
            for (var i=0;i<arr.length;i++){
                content +='<tr><td>'+arr[i].username+'</td><td>'+arr[i].name+/*'</td><td>'+arr[i].classNumber+'</td><td>'+arr[i].groupNumber+'</td>' */'</td><td>'+arr[i].spass+'</td>'+
                    '<td><button type="button" class="btn btn-primary" data-toggle="modal" id="'+ arr[i].username+'" onclick="setSNum(id)" data-target="#myModalChangeStu">修改</button></td></tr>';
            }
            content += "</table>";
            $('#stuInfo').html(content);
        }
    })

}
function setSNum(snumber) {
    $('#showStudent_num').val(snumber);
}

function loadDVD() {
    $.ajax({
        type:'get',
        url:'/AllStudent.do',
        dataType:'json',
        success: function (data) {
            var arr = $.parseJSON(data);
            var content = "<table class=\"table-hover\" style=\"border:1px;width: 100%\">\n" +
                "            <thead>\n" +
                "                 <tr>\n" +
                "                     <th>学号</th>\n" +
                "                     <th>姓名</th>\n" +
                "                     <th>班级</th>\n" +
                "                     <th>操作</th>\n" +
                "                  </tr>\n" +
                "            </thead>";
            for (var i=0;i<arr.length;i++){
                content +='<tr><td>'+arr[i].username+'</td><td>'+arr[i].name+'</td><td>'+arr[i].cnumber+'</td><td>'+
                    '<button type="button" class="btn btn-primary" data-toggle="modal" id="'+ arr[i].username+'" data-target="#myModalDVD" onclick="setSNum1(id)">修改</button></td></tr>';
            }
            content += "</table>";
            $('#dvdInfo').html(content);
        }
    })
}
function setSNum1(snumber) {
    $('#StuD_num').val(snumber);
}
function createStu() {

    var stunum =$('#CreateStu_num').val();
    var stuname =$('#CreateStu_name').val();
    var stupwd =stunum.substr(-6);
    $.ajax({
        type:'post',
        url:'/addStudent.do',
        dataType:'json',
        data:{
            'Snumber':stunum,
            'Sname':stuname,
            'Spass':stupwd
        },
        success:function (result) {
            if(result=="添加成功")
            window.location.reload();
        }

    })

}

function changeStu() {
    var snumber=$('#showStudent_num').val();
    var sname=$('#Stu_name').val();
    var spass=$('#Stu_pass').val();
   /* var cnumber=$('#StuClass_num').val();*/
   /* var gnumber=$('#Group_num').val();*/
    $.ajax({
        type:'get',
        url:'/changeStudent.do',
        dataType:'json',
        data:{
            'Snumber':snumber,
            'Sname':sname,
            'Spass':spass,
           /* 'Cnumber':cnumber,*/
            /*'Gnumber':gnumber*/
        },
        success:function (result) {
            if(result== '修改成功')
                window.location.reload();
        }

    })
}

function changeStuClass() {
    var snum = $("#StuD_num").val();
    var cnum = $("#StuNew_Cnum").val();
    $.ajax({
        type:'post',
        url:'/changeStuClass.do',
        dataType:'json',
        async: false,
        data:{
            'Snumber':snum,
            'Cnumber':cnum
        },
        success:function (result) {
            alert("success");
            if(result==="修改成功")
                window.location.reload();
        },
        error:function () {
            alert("false");
        }
    })
}

function changeStuGroup() {
    var snum = $("#StuD_num2").val();
    var gnum = $("#G_num2").val();
    $.ajax({
        type:'post',
        url:'/changeStuGroup.do',
        dataType:'json',
        async: false,
        data:{
            'Snumber':snum,
            'Gnumber':gnum
        },
        success:function (result) {
            if(result=="修改成功")
                window.location.reload();
        },
        error:function (err) {
            alert(err);
        }
    })

}
/*

function findStuCnumberById(id) {
    $('#StuD_num').val(id);
    $.ajax({
        type:'get',
        url:'/findStuCnumberById.do',
        dataType:'json',
        data:{
            'Snumber':id

        },
        success:function (data) {

                var cnum = $.parseJSON(data);
                $('#StuCurrent_Cnum').val(cnum.cnumber);

        }
    })

}
*/

function showCnumber() {
    $.ajax({
        type: 'get',
        url: '/getCnumberForG.do',
        dataType: 'json',
        success: function (data) {
            var arr = $.parseJSON(data);
            var options = "<option>-请选择班级-</option>";
            for (var i = 0; i<arr.length; i++) {
                options += '<option class="dropdown-item" value="'+ arr[i].cnumber+'">' + arr[i].cnumber + '班' + '</option>';
            }
            $('#showStuCnum').html(options);
        }


    })

}

function showStuInfo(cnumber) {
    $.ajax({
        type:'get',
        url:'/selectStuByClassId.do',
        data:{
            "Cnumber":cnumber
        },
        dataType:'json',
        success: function (result) {
            var arr = $.parseJSON(result);
            var content = "<table class=\"table-hover\" style=\"border:1px;width: 100%\">\n" +
                "            <thead>\n" +
                "                 <tr>\n" +
                "                     <th style='width: 30%'>学号</th>\n" +
                "                     <th style='width: 30%'>姓名</th>\n" +
                "                     <th style='width: 20%'>组号</th>\n" +
                "                     <th style='width: 20%'>操作</th>\n" +
                "                  </tr>\n" +
                "            </thead>";
            for (var i=0;i<arr.length;i++){
                content +='<tr><td>'+arr[i].username+'</td><td>'+arr[i].name+'</td><td>'+arr[i].gnumber+'</td><td>'+
                    '<button type="button" class="btn btn-primary" data-toggle="modal" id="'+ arr[i].username+'" data-target="#myModalchangeG" onclick="setSNum2(id)">修改</button></td></tr>';
            }
            content += "</table>";
            $('#showStuByClassId').html(content);
        }
    })
}

function setSNum2(snumber) {
    $('#StuD_num2').val(snumber);
}

function findStu() {
    var SnumOrSname=$("#selectStu").val();
    $.ajax({
        type:'get',
        url:'/findStuByIdOrName.do',
        data:{
            'SnumOrSname':SnumOrSname
        },
        dataType:'json',
        success: function (result) {
            var arr = $.parseJSON(result);
            var content = "<table class=\"table-hover\" style=\"border:1px;width: 100%\">\n" +
                "            <thead>\n" +
                "                 <tr>\n" +
                "                     <th>学号</th>\n" +
                "                     <th>姓名</th>\n" +
                "                     <th>密码</th>\n"+
                "                  </tr>\n" +
                "            </thead>";
            for (var i=0;i<arr.length;i++){
                content +='<tr><td>'+arr[i].username+'</td><td>'+arr[i].name+'</td><td>'+arr[i].spass+
                    '</td><td><button type="button" class="btn btn-primary" data-toggle="modal" id="'+ arr[i].username+'" data-target="#myModalChangeStu" onclick="setSNum(id)">修改</button></td></tr>';

            }
            content += "</table>";
            $('#stuInfo').html(content);
        }
    })
}