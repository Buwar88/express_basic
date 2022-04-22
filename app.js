const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})
app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a mi primer server en LaunchX')
})
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg:"Hola!!"}
    res.send(explorer)
})
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
