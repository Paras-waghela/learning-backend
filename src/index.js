// require('dotenv').config( {path: './env'} ) // this syntax breaks consistency but it is  

import  dotenv  from "dotenv" 
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()


// Approach 1 
/*  
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERRR: ",err)
        })

        app.listen(process.env.PORT,() => {
            console.log(`App is listening on Port: ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})() 
*/