const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/eComm");

const ProductSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        category:String,
        brand:String

    }
);

const main = async() => {
    const ProductsModel = mongoose.model("products",ProductSchema);
    let data = new ProductsModel(
        {
            name: "u 28",
            price: 20898,
            category: "Mobile Phone",
            brand: "one Plus"
        }
    );

    let result = await data.save();
    console.log(result)
}


const updateInDB =  async() => {
    const ProductsModel = mongoose.model("products", ProductSchema);
    let data = await ProductsModel.updateOne(
        {name: "u 28"},
        {$set: {name:"z 12"}}
    );
    console.log(data);
}

/*const deleteInDB = async() => {
    const ProductsModel = mongoose.model("products", ProductSchema);
    let data = await ProductsModel.deleteOne(
        {brand: "one Plus"}
    )
}*/

const findInDB = async ()=> {
    const ProductsModel = mongoose.model("products" , ProductSchema);
    let data= await ProductsModel.find();
    console.log(data)

}
updateInDB()