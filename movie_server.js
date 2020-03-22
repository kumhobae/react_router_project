const express=require("express")
const request=require("request")
const port=3355;
const app=express();

//Server Start
app.listen(port, ()=>{
    console.log("Server Start ...", "http://localhost:3355")
})

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


const Client=require("mongodb").MongoClient;
app.get("/real_data", (req, res) =>{
    // let url="http://www.kobis.or.kr/kobis/business/main/searchMainDailyBoxOffice.do";
    // request({url:url}, function (err,request,json) {
    //     res.json(json);
    // });
    let page=req.query.page;
    let rowSize=9;
    let skip=(page*rowSize)-rowSize;

    let url="mongodb://203.224.133.121:27017";
    Client.connect(url, function (err, client) {
        let db=client.db("mydb");
        db.collection("movie").find({type:1}).skip(skip).limit(rowSize).toArray(function (err,docs) {
            res.json(docs);
        })
    })
})