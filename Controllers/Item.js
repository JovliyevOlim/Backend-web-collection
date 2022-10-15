const Item = require("../model/itemModel");
const User = require("../model/UserModel");
const validateItem = require("../validators/item-validator");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const createItem = async (req, res) => {
  try {
    // const { error } = validateItem(req.body);
    // if (error) {
    //   return res.send(400).send(
    //     {
    //       message: "Please write completely",
    //     },
    //     req.body
    //   );
    // }
    // const resultOfAuthor = await User.findOne({ _id: req.body.authorId });
    // const nameAuthor = resultOfAuthor.username;
    // if (resultOfAuthor.length <= 0) {
    //   return res.send(400).send(
    //     {
    //       message: "Author not found",
    //     },
    //     req.body.authorId
    //   );
    // }
    const { title, desc, authorId, } = req.body;
    const item = new Item({
     ...req.body
    });
    await item.save();
    res.status(201).json(
      {
        message: "New item created",
          item
      },

    );
  } catch (error) {
    res.status(500).send({
      message: "Sorry for some mistakes\nPlease wait for admin response",
    });
    console.error(error);
  }
};

const getAllItems = async (req, res) => {

  try {
    // const token = req.header;
    // const verified = jwt.verify(token, jwtSecretKey);
    // if (!verified) {
    //   return res
    //     .status(400)
    //     .send({
    //       message: "You are not log in",
    //     })
    //     .redirect("/api");
    // }
    let page = req.query.page;
    let pageSize = 10;

    const items = await Item.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    if (items <= 0) {
      return res.status(400).send("There aren't items yet");
    }
    res.status(200).send({
      message:"these are items",
      items
    });
  } catch (error) {
    res.status(500).send({
      message: "Sorry for technical problems",
    });
    console.error(error);
  }
  
};
//Method DELETE

const deleteItem= async (req,res)=>{
  try{
      await Item.findByIdAndRemove(req.params.id)
      res.status(200).send({
          success:true,
          message:'deleted'
      })
  }catch (err){
    res.status(500).send({
      message: "Sorry for technical problems",
    });
    console.error(err);
  }
}

//Method GET
const getItems = async (req,res)=>{
  try{
       const  items = await Item.find().lean()
      res.status(200).send({
          success:true,
          items
      })
  }catch (error){
    res.status(500).send({
      message: "Sorry for technical problems",
    });
    console.error(error);
  }
}


//Method PUT
const updateItem = async (req,res)=>{
  try{
      await Item.findByIdAndUpdate(req.params.id,{...req.body})
      const updated = await Item.findById(req.params.id)
      res.status(201).send({
          success:true,
          updated
      })
  }catch (error){
    res.status(500).send({
      message: "Sorry for technical problems",
    });
    console.error(error);
  }
}

module.exports = {
  createItem,
  getAllItems,
  updateItem,
  getItems,
  deleteItem

};
