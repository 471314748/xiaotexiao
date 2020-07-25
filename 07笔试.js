var fname = 10;
    function add() {
      var fname = 5;
        return function(){
          fname +=1;
          console.log(fname);
        }
      }
  // console.log(stu.prop.getName());
  // var test = stu.prop.getName;
  // console.log(test());
  var a =add();
  a();
  a();