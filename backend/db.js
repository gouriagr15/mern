const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// MongoDB Atlas connection URI
const mongoURI =
  'mongodb+srv://user2000:test1234@cluster0.i0woe1e.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB CONNECTED');

    // Access the "food_items" and "foodCategory" collections
    const foodItemsCollection = mongoose.connection.db.collection('food_items');
    const foodCategoryCollection = mongoose.connection.db.collection('foodCategory');

    // Fetch data from the collections
    const foodItemsData = await foodItemsCollection.find({}).toArray();
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    // Store the fetched data in global variables if needed
    global.food_items = foodItemsData;
    global.foodCategory = foodCategoryData;

   
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports= mongoDB;