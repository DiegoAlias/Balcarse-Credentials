const pool = require("../database");


const welcome = (req, res) => {
    res.status(200).json({
        message: "Hello World! from controllers"
        });
}

const credentials = async (req, res) => {
    
    //TODO: create a datetable with credentials data

    await pool.query('SELECT * FROM clients', (error, results)=> {
        if (error){
            console.log(error);
        }else{
            res.status(200).json(
                {
                name:       results.name,
                lastname:   results.lastname,
                addresses:  results.address,
                phone:      results.phone,
                email:      results.email,
            });
        }
    })
    
}

module.exports = 
    {
    welcome,
    credentials
    }
