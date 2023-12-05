const drs = require("../models/drSchema");

exports.drregister = async (req, res) => {
    const {name, phone, email, birth, gender,lisence,exp, speciality }=req.body;

    if (!name || !phone || !email|| !birth || !gender|| !lisence|| !exp ||!speciality){
      return  res.status(401).json({message:"Please Fill all Fields"})
    }

    try{
      const predr = await drs.findOne({phone:phone});

      if (predr){
        return   res.status(200).json("Dr already exist")
      }
      
      else{
        console.log ("data started entering");
        const newdr = new drs({
          name,
          phone,
          email,
          birth,
          gender,
          lisence,
          exp,
          speciality,

        });
        console.log("data enterd");
        const storeData= await newdr.save();
        res.status(200).json(storeData);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      }
  };
  
  
  //CHECK PHONE INFORMATION IN DATABASE
  exports.drlogin = async (req, res) => {
     const { phone } = req.body;
  
     const dr = await drs.findOne({ phone: phone });
     
     try{

       if (!dr) {
         return res.status(201).json({message:"Phone No not found"})
        }
        else {
          res.status(201).json({ exists: true ,dr});
          console.log("Phone No. Match");
        }
      }
    
    catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ error: "Unable to connect with DB" });
    }
    
  };
  