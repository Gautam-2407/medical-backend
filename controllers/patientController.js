const patient = require("../models/patientSchema");
const jwt = require("jsonwebtoken");
const SecretKey = "GAUTAM";

exports.patientregister = async (req, res) => {
    const {name, phone, email, birth, gender, description, password}=req.body;

    if (!name || !phone || !email|| !birth|| !gender || !description || !password ){
      return  res.status(401).json({message:"Fill all fields"})
    }

    try{
      const prepatient = await patient.findOne({email:email});

      if (prepatient){
        return   res.status(200).json("patient already exist")
      }
      else{
        const newpatient = new patient({
          name,
          phone,
          email,
          birth,
          gender,
          description,
          password
        });
        const storeData= await newpatient.save();
        res.status(200).json(storeData);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      } 
  };
  
  
  //CHECK PHONE INFORMATION IN DATABASE
  exports.patientlogin = async (req, res) => {
     const { email } = req.body;
  
     const prepatient = await patient.findOne({ email: email });
     
     try{

       if (!prepatient) {
         return res.send("email not found")
        }
        else {
          const login_token = jwt.sign({email: prepatient.email,},
            SecretKey);
            res.status(201).json({ exists: true, prepatient, token:login_token});
    
        }
      }
    
    catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ error: "Unable to connect with DB" });
    }
    
  };
  