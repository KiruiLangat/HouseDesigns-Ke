import prisma from '../../lib/prisma';

function convertBigInt(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertBigInt);
  } else if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, typeof v === 'bigint' ? v.toString() : convertBigInt(v)])
    );
  }
  return obj;
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const SwiperProjects = await prisma.SwiperProjects.findMany({
        orderBy: { id: 'desc' }
      });
      res.status(200).json(convertBigInt(SwiperProjects));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}