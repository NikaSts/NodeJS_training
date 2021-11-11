import express from 'express';
import morgan from 'morgan';


const db = {
  todos: [{
    complete: true,
    id: 22,
    text: "Do some shopping"
  }, {
    complete: false,
    id: 14,
    text: "Finish the Node.js course"
  }],
}

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/:id', (req, res) => {
  const item = db.todos.find(todo => todo.id === Number(req.params.id));
  res.json({
    data: item
  })
});

app.get('/', (req, res) => {
  res.json({
    data: db.todos
  })
});


app.post('/', (req, res) => {
  const newTodo = {
    complete: false,
    id: Date.now(),
    text: req.body.text
  }
  db.todos.push(newTodo)

  res.json({ data: newTodo })
});

app.listen(8000, () => {
  console.log('Server on http://localhost:8000');
  console.log(db.todos);
});
