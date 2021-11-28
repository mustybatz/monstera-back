const { createProduct, getProducts, getProduct, updateProduct, deleteProduct, searchByName } = require("./products.service");
const createProductSchema = require("./validations/createProduct.validation");
const updateProductSchema = require("./validations/updateProduct.validation");


const createProductController = async(req, res) => {

    const { value, error } = createProductSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ status: 400, error });
    }

    const product = await searchByName(value.name);

    if (product) {
        return res.status(409).json({ status: 409, message: 'Product already exists' });
    }

    try {
        await createProduct(value);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }

    return res.status(201).json({ code: 200, message: 'Product created successfully' });
}

const getProductsController = async(req, res) => {

    try {
        const products = await getProducts();

        return res.status(200).json({
            status: 200,
            body: products
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }
}

const getProductController = async(req, res) => {

    const { id } = req.params;

    try {

        const product = await getProduct(id);

        if (!product) {
            return res.status(404).json({ status: 404, message: 'Product not found' });
        }

        return res.status(200).json({ status: 200, body: product });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }

}

const updateProductController = async(req, res) => {
    const { id } = req.params;
    const { value, error } = updateProductSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ status: 400, error });
    }

    const product = await getProduct(id);

    if (!product) {
        return res.status(404).json({ status: 404, message: 'Product not found' });
    }

    try {
        await updateProduct(id, value);

        return res.status(200).json({ status: 200, message: 'P̶̛̬̫͈͕͓̯̻̼̔͗͗͌̈͑́̔́͛̓̀͗̐͆̿̆̄͗̋̚ŕ̸̢̢̛̝̬̩̩͈̯͈̟̱͉͚̜͓̺̲̼͚͍̺̰̰̳͕͈̽͂̽̒͛̂̀̀̌̔̅̓̈́̌̀́̋͘̕̕̕͠͠͝ͅȯ̴̠̘̥̤͖̲̑̒̽̂̋̏͊̒̌̈̄̔͛̏͂́͒̄̎͐̓̋͘͜͝͠d̶̨̛͖͍̱̮̤̳̜̘͙̗̭̰̘͎͕̪̝̞̼͙͕̲̪̓͊͜͜ư̴̱͕̖̟͖̥̗̩̞̊̍͑̔͒͒̏̋̍͂̔̅͛̍̀̑͋̓̓̿͗͒̊́̀̋͐̓̈̈́̐̕͘͘̕̚͠͝͝͝͝c̶̡̮͇̟̖̜̳͉̬̬̤͒̀̽͗̄̔̏̉̊̋̅̊͋͛̍̏͐̃̽̈́̃̿̓̓̔͘̕͘͜͝͝͝͝ẗ̷̡̛̗̙͈̪̠͐̌̃̑̑̐̆̽͒̇̄̏̉̇͗͐̓̅͘̕͝͝ ̵̢̢̧̦̭̭̞̳̫̲̜͎̯̻͍̙̻̜̣̞̹̻͑̀͛̎̒̀̅̿̽̍̔̓̂͒́̓̿̚̚̚͘͘͘͜ͅu̷̡̨̡͇̙̩̮̥̯͕̜͕̤͔̝͍̗̮̳̝̮̒́͂̂̅̽̓͋͋͊͌́̓͂̽͘͘p̵̨̧̢̮͍̳͉̠̠͕͙̩͠ḑ̴̢̢̢̡̛͓͓̘͖̣͓̪̟͙̮͍̦͉̝͖͔̞̱̫̞̖̥͈̟̠͕̮̭̹̩̝͍̪͓̝̒̐͊̂̔̓̆̒͆̅̓̾͋̇̿̔̀̒̈͑̓́̓͂̇̆̄͌̆̈́̀͗̉̄̎͐̈́̇̚̚͘͠ͅa̴̢̛̋̄̈́̔̍̈́͆̃̈̈́̈́͆́̿̅͊̈̐̈́̂̿̑̔̅̀̕͝t̴̢̢͚̭̼̝̦̤̮̠̼̠̩̞̝̫̘̭̻͕͚̦̰͍͕͇̣̘̭̲̣̥̗̲̯̘̰͓͖͕̓͛̐̀̀͑́͑͌͜͜e̵̢̢̛̛̯̦͇̪̫͉͎͙̹͎͙̤̮̱͓̤̯͍̹͖͔̤̞̳̮̤͆̋̌̽̈̀̀̇̋͌̄̀̅͋̊̿̀́̐͗̈̍̒̍̉̊̑̔̑͘͘͠d̷͈͚͉̜̳̈́̊͌̆̏͗̅͐͋̚͠' })
    } catch (error) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }
}

const deleteProductController = async(req, res) => {

    const { id } = req.params;

    const product = await getProduct(id);

    if (!product) {
        return res.status(404).json({ status: 404, message: 'Product not found' });
    }

    try {
        await deleteProduct(id);

        return res.status(200).json({ status: 200, message: 'P̴̛̱̦̥͕̩̘͔͂͐͊̔͊̈̃̊́͒͂̐͐̈́̉͐̆͌́̎͌̾̃̍̿͌͝͠r̵̨̯̥̹̘͆̓̑͝ö̸̧̢͖̜̗̺̙͓͙͇̥̮͈͈͉͍̠͙̞̻̼̜̹̬̲̲̝̫̖͍͔̝̫̲̩̑̀͑̾̃̿̑̈͊̒̈́͜͜͜͝͝ͅͅḑ̶̨̡̛̙̭̦͚͙̞͇̈́͐͆̃̓̓̽̀͌̂̀͗͆̓̽̌̒͆̽̏̀͌̈͗̕͘͘͝u̴̢̨̨̢̗̩͕̠̺͚͇͖͉͓̺͚͔̜̼̰̙̭͓͉̣͎̺̼͓̹̅̌́̃̉̿̓̄̐̉̈̇̅͋̌̕̚͜͝͝͠ͅc̶̮͈̹̬̞͕͓̗̙͖̻͍̤͚̟͛̆̋̀͌̎͗͂͒͒̍̀̑̉͊̀̿͛͑͊̇̏̇̚͜͠ṫ̷̢̨̧̛̛̗̘̖̗̼͍̺̥̮͇͉͔̯̬̺̮̮͔̣̼̭̩͔͎͎̥͎͖͚̭̯̖̱̫̝͉̻̎͊͒͌̋͑̐͐͊͐́̍̃́͒̓̃̈́̀͌͐̐̌̀̆͑̉̄͛̈́̕͝͝͝͝ ̴̡̨̨̘͎̱͈̲͇̮͎̦͚͎̯̞̘̹̙̩̜̳̤̭̂̀́͗̆̃̉̓̐͌̓̇̈̆̏̓̾̅̈́́͘͘̚̕͘ḑ̴̨̲͈̰̝͆́̈́͆̏͂̆̈́̿͂́͂̽̕̚͜͠ę̴̢̤̱̭͇̭̘̖̲̯͔̮̳͚̭͍͇͙̞͈̬̟̻̝̟͕͙̦̱͉̼̣̤̈̏̌̊͊͜ḷ̸̨̛͓̘͔͔͚̯͖̫͚̬̖̱͚̺͉͉̋̅͂́̓͌̎̓̆͆̓̎̌͌̀̎̆̃͆͗͂͌̆̍̃͐̎̎̏̌͗̊͘̚͘͘̚͝͝͠͝͠ȩ̶̢̨̙͎̘̞͚͙̺̦̦͔̺̞̼͚̠̮̼͓͕̜̼͍̪̹͙̀́̾̆͊̆͗͒̏̓͋̇̎̿͐̈́͗̑̄̐̚͘͠͝t̵̫̠̙̣̟͚̙̝͊̃̈́̀̂̈́̋͆̂̉̓̓̓̆̑͛́̏͋͒͋͘͠é̵̢̘̣͚̪̯̺̼̠̣̝̬̬̘͎͎̠͕͎̘͍̬̖̜̭̘̳͔̟̎̂͌̾͌͗̆̆́̓͑̈́̓̊̈́̈́̒̆̇̈̂͐́̓̄̈́̍̓̄́͜͜͝ͅͅḍ̷̢̭̲̩̼̗̝̭̻̞͖̹̱͍̥͇̳̪̜̠̻̑' })
    } catch (error) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }


}


module.exports = {
    createProductController,
    getProductsController,
    getProductController,
    updateProductController,
    deleteProductController
}