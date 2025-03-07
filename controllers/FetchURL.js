const URLS =require("../modal/urlModal.js")


async function FetchShortenURLS(req,res){
    const {id} = req.params

    if(id){

        try{
            const data = await URLS.find({shortId:id})
            console.log(data[0].baseUrl)
            res.redirect(data[0].baseUrl)

        }catch(e){
            res.json({error:e.message})
        }
    
    }
    
}



module.exports = FetchShortenURLS