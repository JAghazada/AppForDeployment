const HomePageController = (req,res)=>{
    res.status(200).json({
        message:"Is that ok?"
    })
}
const AdminPageController = (req,res)=>{
    res.render("admin")
}
module.exports = {HomePageController,AdminPageController};


