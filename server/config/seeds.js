const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Computers' },
    { name: 'Monitors' },
    { name: 'Cables' },
    { name: 'Accessories'},
    { name: 'Smart Products'},
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    
    {
      details: 'QuantumByte',
      color: 'Silver',
      name: 'Laptop',
      description: 'A laptop computer',
      image: 'https://t4.ftcdn.net/jpg/01/67/28/69/360_F_167286969_jAEAfUY47qQ1SHqf1SyqSYypOsl0fWYF.jpg',
      price: 329.99,
      quantity: 100,
      category: categories[0]._id,
    },
    {
      details: 'IMac M3 24inch',
      color: 'White',
      name: 'Desktop',
      description: 'A desktop computer',
      image: 'https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 645.00,
      quantity: 100,
      category: categories[0]._id,
    }, 
    {
      details: 'VertexEdge',
      color: 'Silver',
      name: 'Tablet',
      description: 'A portable tablet',
      image: 'https://t3.ftcdn.net/jpg/03/57/24/44/240_F_357244497_q8RsVSGpqL1sko6SQ5QWuT5naNK9qjNX.jpg',
      price: 145.00,
      quantity: 100,
      category: categories[0]._id,
    }, 
    {
      details: 'QuantumByte',
      color: 'Black',
      name: 'Monitor',
      description: 'A 24" monitor',
      image: 'https://t3.ftcdn.net/jpg/03/25/48/12/240_F_325481234_IjwaylSbln8rEq2UNXjV9mb3GMWirDT0.jpg',
      price: 29.99,
      quantity: 100,
      category: categories[1]._id,
    },
    {
      details: 'NovaFusion',
      color: 'Black',
      name: 'Monitor-2',
      description: 'A 27" monitor',
      image: 'https://t3.ftcdn.net/jpg/01/57/45/56/240_F_157455610_39QOu5333iNOG3fRq1WsYm1WyeGbLuEE.jpg',
      price: 49.99,
      quantity: 100,
      category: categories[1]._id,
    },
    {
      details: 'VertexEdge',
      color: 'Black',
      name: 'Monitor-3',
      description: 'A 32" monitor',
      image: 'https://t3.ftcdn.net/jpg/01/42/43/98/240_F_142439866_7vElCBHte6puqMafeG0FcLv86Vd1SbQP.jpg',
      price: 79.99,
      quantity: 100,
      category: categories[1]._id,
    },
    {
      details: 'QuantumByte',
      color: 'Black',
      name: 'HDMI',
      description: 'An HDMI cable',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWT0yM9VnOHm2NJHn7U5vlPA6xq3_IOe82p0mQH-Lj3uuX9OcXTPmWVu36-FHaUPDMK0I&usqp=CAU',
      price: 9.99,
      quantity: 100,
      category: categories[2]._id,
    },
    {
      details: 'Netstrand HDMI',
      color: 'Black',
      name: 'DisplayPort',
      description: 'High-definition Connectivity',
      image: 'https://media.istockphoto.com/photos/-picture-id182461665?k=6&m=182461665&s=612x612&w=0&h=dQBkxuHcO2iWVKIWOye0kOjJ-S-2SShzngcx7OCaAHY=',
      price: 9.99,
      quantity: 100,
      category: categories[2]._id,
    },
    {
      details: 'VeeTop Ethernet',
      color: 'White',
      name: 'Ethernet ',
      description: 'An ethernet cable',
      image: 'https://i5.walmartimages.com/asr/4b9aedc4-19ad-4f03-b0b4-dcea0cba812d.7d42bece64c32bd8a414e8c1434d14b6.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      price: 9.99,
      quantity: 100,
      category: categories[2]._id,
    },
    {
      details: 'QuantumByte',
      color: 'Black',
      name: 'Keyboard',
      description: 'A fancy mechanical keyboard',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxpExP3Vx8A60QC0mALEY5_FRdzvA-5Jxt9peyRjSyOtro59_FTjCQbH1KHUERh2qYlQ&usqp=CAU',
      price: 39.99,
      quantity: 100,
      category: categories[3]._id,
    },
    {
      details: 'NovaFusion',
      color: 'Silver',
      name: 'Mouse',
      description: 'The best and fastest mouse',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29Vos_uaDYaSbrRrP5T9V3beIuBKmU3Us39T9iA_qKbkMAU-jt6tHtaJYoXKMfIiokCM&usqp=CAU',
      price: 10.99,
      quantity: 100,
      category: categories[3]._id,
    },
    {
      details: 'VertexEdge',
      color: 'Black',
      name: 'Headphones',
      description: 'Noise canceling headphones',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtEesNie7X_Y9XM5fH6JZnPqfSZBTngMciw&usqp=CAU',
      price: 59.99,
      quantity: 100,
      category: categories[3]._id,
    },
    {
      details: 'QuantumByte',
      color: 'Black',
      name: 'SmartWatch',
      description: 'A watch for everything',
      image: 'https://media.istockphoto.com/photos/smart-watch-picture-id486993228?k=6&m=486993228&s=612x612&w=0&h=8Js5Aot9Ift4HJXp6tGJJKTOX7nQDb6OfRYkqlPuyBQ=',
      price: 159.99,
      quantity: 100,
      category: categories[4]._id,
    },
    {
      details: 'NovaFusion',
      color: 'Silver',
      name: 'SmartAssistant',
      description: 'Tell it what to do',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WuWhrH-hxwsA2V4OGiZ5I9QR8AhTqAvK6A&usqp=CAU',
      price: 159.99,
      quantity: 100,
      category: categories[4]._id,
    },
    {
      details: 'VertexEdge',
      color: 'Black',
      name: 'VR Headset',
      description: 'Escape reality',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hd7T28l70fv6Ygid5Ib8ddraRvOTlg2MYg&usqp=CAU',
      price: 1259.99,
      quantity: 100,
      category: categories[4]._id,
    },
  ]);

  console.log('products seeded');

  await User.create({
    name: 'Test',
    email: 'test@email.com',
    password: 'password12345'
  });

  await User.create({
    name: 'Dale Cooper',
    email: 'dale@fbi.gov',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
