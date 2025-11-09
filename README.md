# ❌ No-as-a-Service (Hono Edition)

<p align="center">
  <img src="https://raw.githubusercontent.com/hotheadhacker/no-as-a-service/main/assets/imgs/naas-with-no-logo-bunny.png" width="800" alt="No-as-a-Service Banner" />
</p>

Ever needed a graceful way to say "no"?
This tiny API returns random, generic, creative, and sometimes hilarious rejection reasons — perfectly suited for any scenario: personal, professional, student life, dev life, or just because.

Originally built by [hotheadhacker](https://github.com/hotheadhacker), this fork has been converted to a Hono-based server by [iamthebestcodeer](https://github.com/iamthebestcodeer).

---

## 🚀 API Usage

Base URL depends on where you deploy this Hono server.

- Method: `GET`
- Path: `/no`

Example response:
```json
{
  "reason": "This feels like something Future Me would yell at Present Me for agreeing to."
}
```

---

## 🛠️ Running Locally

1. Install dependencies
```bash
bun install
```

2. Start the Hono server
```bash
bun start
```

3. Hit the endpoint
```bash
curl http://localhost:3000/no
```

---

## 🧱 Key Files

- `hono-app.js` — Hono server entrypoint
- `reasons.json` — Collection of rejection reasons
- `test` — Tests for the Hono implementation

---

## 👤 Authors

- Original project: [hotheadhacker](https://github.com/hotheadhacker)
- Hono conversion: [iamthebestcodeer](https://github.com/iamthebestcodeer)

---

## 📄 License

MIT — reuse freely, preferably to say "no" with style.
