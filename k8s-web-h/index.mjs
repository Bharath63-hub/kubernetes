import express from 'express'
import os from 'os'

const app= express()
const PORT= 3000

app.get("/", (req,res) => {
    const hellomessage =`Rolled update for the ${os.hostname}`
    console.log(hellomessage)
    res.send(hellomessage)
})

app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`)
})