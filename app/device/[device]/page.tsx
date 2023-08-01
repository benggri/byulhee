import MockupMobile from '../../../src/components/mockup_mobile';
import MockupPc from '../../../src/components/mockup_pc';

export default function Device(
    {params} : {params: {device:string}}
) {
  const device = params.device;
  return (
    <div>
    {
      (params.device === 'mobile') ? 
        <MockupMobile></MockupMobile> :
        (params.device === 'pc') ? 
          <MockupPc></MockupPc> :
          <MockupMobile></MockupMobile>
    }
    </div>
  );
}