import { StallDB } from '@mongo/models';
import { DynamicMap, BadRequestError } from '@interfaces/index';

const retrieve = async (req: any, res: any) => {
  let stalls;
  try {
    stalls = <DynamicMap> await StallDB.find();
  } catch (err) {
    throw new BadRequestError('stall', err);
  }
  if (!stalls) {
    throw new BadRequestError('stall', 'not found');
  }

  stalls = stalls.map((stall: any) => ({
    ...stall.toJSON(),
    password: undefined,
  }));

  return res.status(200).json(stalls);
};

export default retrieve;
