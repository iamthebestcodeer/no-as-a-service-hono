const { Hono } = require('hono');
const { serve } = require('@hono/node-server');
const fs = require('fs');

const app = new Hono();
const PORT = process.env.PORT || 3000;

const reasons = JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));

app.get('/no', (c) => {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  return c.json({ reason });
});

serve({
  fetch: app.fetch,
  port: PORT,
});
