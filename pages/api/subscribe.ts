import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function waitingListHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return res.status(400).json({ error: 'Email is invalid' });
    }

    try {
      const contact = await prisma.contacts.create({
        data: {
          email: email,
        },
      });
      return res.status(200);
    } catch (error) {
      if (error instanceof Error) {
        const prismaError: { code?: string; meta?: { target?: string[] } } =
          error as any;

        if (
          prismaError.code === 'P2002' &&
          prismaError.meta?.target?.includes('email')
        ) {
          return res
            .status(400)
            .json({ error: 'This email is already subscribed.' });
        }
      }

      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } else {
    res.status(405).json({ error: 'Method is not allowed' });
  }
}
