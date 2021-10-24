const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
const users = [
      { id: 0, name: 'sagar', phone: '016855', email: 'sagarmazudmer50@gmail.com' },
      { id: 1, name: 'arnab', phone: '016855', email: 'arnab50@gmail.com' },
      { id: 2, name: 'soniya', phone: '016855', email: 'soniya50@gmail.com' },
      { id: 3, name: 'swapan', phone: '016855', email: 'swapan50@gmail.com' },
]
app.get('/user', (req, res) => {
      const searchQuery = (req.query.v)

      if (searchQuery) {
            const searchResult = users.filter(user => user.name.toLowerCase().includes(searchQuery))
            res.send(searchResult)
      }

      else {
            res.send(users)

      }
})
app.post('/user',(req,res)=>{
      const newUser=req.body;
      newUser.id=users.length
      users.push(newUser)
      console.log('hitting the post',req.body)
      // res.send('post got hitted')
      res.json(newUser)
})
app.get('/fruits/mango/fajli', (req, res) => {
      res.send('moja onek moja')
})
app.get('/fruits', (req, res) => {
      res.send('konta khabe?')
})
app.get('/user/:ID', (req, res) => {
      const id = req.params.ID;
      const user = users[id];
      res.send(user)
})
app.get('/', (req, res) => {
      res.send('Hello World express with node and mongoDB with kotlin')
})
app.listen(port, () => {
      console.log('Listening to the app', port)
})