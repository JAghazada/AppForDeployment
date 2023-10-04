const HomePageController = (req,res)=>{
    res.status(200).json({
        message:"Is that ok?"
    })
}
const AdminPageController = (req,res)=>{
    res.status(200).json({
        isAdmin:false,
        message:"you aren't admin"
    })
}
module.exports = {HomePageController,AdminPageController};


