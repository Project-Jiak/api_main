import { StallDB } from '@mongo/models';
import { DynamicMap, BadRequestError } from '@interfaces/index';

const get = async (req: any, res: any) => {
  const { uen } = req.query;

  let stall;
  try {
    stall = <DynamicMap> await StallDB.findOne({ uen });
  } catch (err) {
    throw new BadRequestError('stall', err);
  }
  if (!stall) {
    throw new BadRequestError('stall', 'not found');
  }

  return res.status(200).json({
    uen: stall.uen,
    name: stall.name,
    operatinghours: stall.operatinghours,
    menu: stall.menu,
  });
};

export default get;
