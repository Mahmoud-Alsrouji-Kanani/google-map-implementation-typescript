import { User } from './User'; // {} because we are not exporting with the default keyword inside User
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);

const customMap = new CustomMap('map');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);