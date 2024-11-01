const express=require("express")
const router=express.Router()

//controllers
const { Chatbot } = require("../Controllers/Bot/ChatBotController")
router.route('/chat').post(Chatbot)

module.exports=router