export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false });
  }
  const { code } = req.body || {};
  const secret = process.env.ZODYL_CODE;
  if (code === secret) {
    return res.status(200).json({ ok: true });
  } else {
    return res.status(200).json({ ok: false });
  }
}
