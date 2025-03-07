const URLS = require("../modal/urlModal.js")
const uuid = require("uuid")



async function ShortURL(req,res){

    const {url} = req.body
    console.log(url)

   if(url.startsWith("http://") || url.startsWith("https://") || url.startsWith("www.") ){

    try {

        const check = await URLS.find({baseUrl:url})

        if(check.length == 0){

            const result = await URLS.create({
                baseUrl:url,
                shortId:uuid.v4().substring(28,35)
            })

            if(result){
                console.log("Check One")
                res.render("index",data = {value:result.shortId,success:true})
            }

        }else{
            console.log("Check 2")
            res.render("index",data = {value: check[0].shortId,success:true})
        }



    } catch (error) {
        res.render("index", data = {msg:error.message,success:false})
    }

   }else{

    res.render("index",data = {msg:"Invalid url format.",success:false,val:"domainCheck"})

   }
}


module.exports = ShortURL