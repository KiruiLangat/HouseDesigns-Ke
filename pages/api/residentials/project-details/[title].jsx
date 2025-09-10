

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
  const { title } = req.query;

  if (req.method === 'GET') {
    try {
      const project = await prisma.projectDescription.findFirst({
        where: { title: title }
      });
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.status(200).json(convertBigInt(project));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}