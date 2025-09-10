import prisma from '../../lib/prisma';

function convertBigIntToString(value) {
  if (typeof value === 'bigint') return value.toString();
  if (Array.isArray(value)) return value.map(convertBigIntToString);
  if (value !== null && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = convertBigIntToString(v);
    return out;
  }
  return value;
}

export default async function handler(req, res) {
  console.log('headers:', req.headers);
  console.log('raw body:', req.body);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Accept multiple input key variations (client may send different casing)
  const body = req.body || {};
  const Name = body.Name ?? body.name ?? body.fullName ?? null;
  const Email = body.Email ?? body.email ?? null;
  const Number = body.Number ?? body.number ?? body.phone ?? body.phoneNumber ?? null;
  const Message = body.Message ?? body.message ?? body.msg ?? null;

  // Basic validation
  if (!Name || !Email || !Message) {
    console.warn('Validation failed, missing required fields', { Name, Email, Message });
    return res.status(400).json({ error: 'Missing required fields: name, email, message' });
  }

  try {
    const contact = await prisma.contactForm.create({
      data: {
        // Map to your Prisma model fields. If your model uses lowercase names, change these keys.
        Name,
        Email,
        Number,
        Message,
      },
    });

    const safeContact = convertBigIntToString(contact);
    return res.status(200).json({ message: 'Form submitted successfully', contact: safeContact });
  } catch (error) {
    console.error('Prisma create error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}