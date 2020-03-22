const express=require("express")
const request=require("request")
const port=3355;
const app=express();
const url="mongodb://203.224.133.121:27017";
const Client=require("mongodb").MongoClient;
const dbName="mydb";

//Server Start
app.listen(port, ()=>{
    console.log("Server Start ...", "http://localhost:3355")
})

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/real_data", (req, res) =>{
    let page=req.query.page;
    let type=req.query.type;
    let rowSize=9;
    let skip=(page*rowSize)-rowSize;

    Client.connect(url, function (err, client) {
        let db=client.db(dbName);
        db.collection("movie").find({type:Number(type)}).skip(skip).limit(rowSize).toArray(function (err,docs) {
            res.json(docs)
            client.close()
        })
    })
})

app.get("/movie_total", (req, res) =>{
    let page=req.query.page;
    let type=req.query.type;
    let rowSize=9;
    let skip=(page*rowSize)-rowSize;

    Client.connect(url, function (err, client) {
        let db=client.db(dbName);
        db.collection("movie").find({type:Number(type)}).count(function (err,count) {
            res.json({totalPage:Math.ceil(count/rowSize)})
            client.close()
        })
    })
})

app.get("/detail", (req, res) =>{
    let mno=req.query.mno;

    Client.connect(url, function (err, client) {
        let db=client.db(dbName);
        db.collection("movie").find({mno:Number(mno)}).toArray(function (err, docs) {
            res.json(docs)
            client.close()
        })
    })
})

app.get("/movie_news", (req, res) =>{

    Client.connect(url, function (err, client) {
        let db=client.db(dbName);
        db.collection("news").find({}).toArray(function (err, docs) {
            res.json(docs)
            client.close()
        })
    })
})

app.get("/movie_find", (req, res) =>{
    // let findStr=req.query.mno;

    Client.connect(url, function (err, client) {
        let db=client.db(dbName);
        db.collection("movie").find({}).toArray(function (err, docs) {
            res.json(docs)
            client.close()
        })
    })
})

//일일 박스오피스 searchMainDailyBoxOffice.do
//실시간 예매율 searchMainRealTicket.do
//좌석점유율순위 searchMainDailySeatTicket.do
//온라인상영관 일일 searchMainOnlineDailyBoxOffice.do
app.get("/movie_home", (req, res) =>{
    let no = req.query.no
    let site =""
    if(no==='1'){
        site="searchMainDailyBoxOffice.do"
    } else if(no==='2'){
        site="searchMainRealTicket.do"
    } else if(no==='3'){
        site="searchMainDailySeatTicket.do"
    } else if(no==='4'){
        site="searchMainOnlineDailyBoxOffice.do"
    }

    let url = "http://www.kobis.or.kr/kobis/business/main/"+site
    //http://www.kobis.or.kr/kobis/business/main/searchMainDailyBoxOffice.do
    console.log(url)
    request({url:url}, function (err,req,json) {
        //res.json(JSON.parse(json))
        //console.log(json)
        //res.json(JSON.parse("aa"))
    })

})