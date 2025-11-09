const assert = require('assert');
const { Hono } = require('hono');
const fs = require('fs');

// Minimal in-memory test of /no behavior
const reasons = JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));

const app = new Hono();
app.get('/no', (c) => {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  return c.json({ reason });
});

(async () => {
  const res = await app.request('http://localhost/no');
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.ok(typeof body.reason === 'string');
  console.log('hono /no endpoint test passed');
})();
