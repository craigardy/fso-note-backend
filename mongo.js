// Run line below (Replace password with database password):
// node mango.js <password>
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

// Connect to database
const password = process.argv[2]
const url = `mongodb+srv://fullstack:${password}@cluster0.nf9lqqr.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery',false)
mongoose.connect(url)

// Define note schema
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})
// Define the model
const Note = mongoose.model('Note', noteSchema)

// Create new note object via Note model
const note = new Note({
  content: 'HTML is easy',
  important: true,
})

// // Save the note to the database
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

// // Retrieve ALL ({}) notes from database
// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })

// // Include only important notes
// Note.find({ important: true }).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })