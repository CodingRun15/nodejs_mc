const express = require('express');
const ProductModel = require('./productModel');
const router = express.Router();

router.get('/',async(req,res)=>{
    const products = await ProductModel.find();
    if(products){
   return res.json(products);
    }
    else{
        return res.status(404).send('No products found');
    }
})
router.post('/add',async(req,res)=>{
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    return res.json(newProduct);
})
router.patch('/update/:id',async (req,res)=>{
    const { id } = req.params;
    console.log(id);
   await ProductModel.findByIdAndUpdate(id,req.body);
   return res.send("success");
})
router.delete('/delete/:id',(req,res)=>{
    const { id } = req.params;
    ProductModel.findByIdAndDelete(id);
        return res.json({message:'Product deleted successfully'});
    })

module.exports = router;