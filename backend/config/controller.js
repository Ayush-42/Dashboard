import { dashboardInfo } from "../schema.js";
import fs from 'fs';
const filePath = './jsondata.json';

export const fillDatabase = (req,res)=>{

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err, '-----------error in file path');
      res.status(500).send('Error reading JSON file');
      return;
    }

    try {
      const jsonData =JSON.parse(data);

      // Assuming jsonData is an array, you can iterate through it and save each item to MongoDB
      jsonData.forEach(async (item) => {
        try {
          // Create a new document using the Mongoose model
          const dataDocument = new dashboardInfo(item);
          // Save the document to MongoDB
          await dataDocument.save();
        } catch (saveError) {
          console.error(saveError,"----------------error in item part");
        }
      });

      res.json({ message: 'Data saved to MongoDB successfully' });
    } catch (jsonError) {
      console.error(jsonError);
      res.status(500).send('Error parsing JSON data');
    }
  });
}

export const fetchDatabase = async (req,res) =>{
    try{
        const fetchData = await dashboardInfo.find({});
        console.log(fetchData,'-----------------fetchData')
        if(fetchData.length > 0){
            return res.status(200).json({message: 'User Data Fetched!!', dataInfo: fetchData});
        }else{
          return res.status(404).json({message: "User Not Finded!!"})
        }

    }catch(error){
        res.status(500).json({error: 'Error retrieving employee details'})
    }
}