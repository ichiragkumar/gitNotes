import express , {Express} from "express"
import authRoutes from "./routes/auth.routes";



const app:Express = express()

app.use(express.json())
app.use('/api', authRoutes);


app.get("/" , (req , res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
    console.log( `Server is running on port http://localhost:3000` )
})