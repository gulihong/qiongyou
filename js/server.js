var fs=require('fs'),
    es=require('express'),
    qs=require('querystring'),
    app=es();

//getMenu
app.get('/getMenu',function(req,res){
  fs.readFile('./data/menu.json',function(err,data){
    if(err){
      console.log(err);
    }else{
      var obj=JSON.parse(data);
      res.send(obj);
    }
  })
});

//banner
app.get('/banner',function(req,res){
  fs.readFile('./data/banner.json',function(err,data){
    if(err){
      console.log(err);
    }else{
      var obj=JSON.parse(data);
      res.send(obj);
    }
  })
});

//freework
app.get('/freework',function(req,res){
  fs.readFile('./data/freeWalk.json',function(err,data){
    if(err){
      console.log(err);
    }else{
      var obj=JSON.parse(data);
      res.send(obj);
    }
  })
});

//citywork
app.get('/citywork',function(req,res){
  fs.readFile('./data/cityWalkList.json',function(err,data){
    if(err){
      console.log(err);
    }else{
      var obj=JSON.parse(data);
      res.send(obj);
    }
  })
});

app.get('*',function(req,res){
    var bol=fs.existsSync('.'+req.path);
    if(bol){
        var realpath=fs.realpathSync('.'+req.path);
        res.sendFile(realpath);
    }else{
        var realpath=fs.realpathSync('./404.html');
        res.sendFile(realpath);
    }
});
app.listen(8888,function(){
      console.log('服务启动');
});
