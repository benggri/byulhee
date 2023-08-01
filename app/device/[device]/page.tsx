import MockupMobile from '../../../src/components/mockup_mobile';
import MockupPc from '../../../src/components/mockup_pc';

export default function Device(
    {params} : {params: {device:string}}
) {
    if (params.device == "mobile") {
        return (<MockupMobile></MockupMobile>);
    } else if (params.device == "pc") {
        return (<MockupPc></MockupPc>);
    } else {
        return (<MockupMobile></MockupMobile>);
    }
}