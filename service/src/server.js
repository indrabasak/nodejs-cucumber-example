const express = require('express');
const NodeCache = require('node-cache');
const uuid = require('uuid');
const { setTimeout } = require('timers/promises');

const app = express();
app.use(express.json());
const cache = new NodeCache({ stdTTL: 15 });

let count = 0;

app.post('/books', (req, res) => {
  const id = uuid.v4().toString();
  console.log(id);
  const book = {
    id,
    name: req.body.name
  };
  cache.set(id, book);

  return res.status(200).json(book);
});

app.get('/books/:id', (req, res) => {
  try {
    const { id } = req.params;
    if (cache.has(id)) {
      return res.status(200).json(cache.get(id));
    }
  } catch (e) {
    throw new Error(e);
  }

  return res.status(404).send('Not found');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.get('/timeout', async (req, res) => {
  count += 1;
  if (count % 3 === 0) {
    return res.status(200).json({ status: 'Hello' });
  }

  await setTimeout(1000 * 20);

  return res.status(200).json({ status: 'Hello' });
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();
  console.log('Example app listening at http://%s:%s', host, port);
});
server.setTimeout(3000);
