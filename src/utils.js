import PCLogo from './assets/platforms/pc.jpg';
import XBoxOne from './assets/platforms/xbox one.jpg';
import PS4 from './assets/platforms/ps4.jpeg';
import PS5 from './assets/platforms/ps5.jpg';
import XBoxX from './assets/platforms/xbox series x.jpg';
import Switch from './assets/platforms/switch.jpeg';
import Linux from './assets/platforms/linux.png';
import iOs from './assets/platforms/iOS.jpg';

export const getRelevantImage = name => {
  let image;
  if (name.includes('5')) {
    image = PS5;
  } else if (name.includes('4')) {
    image = PS4;
  } else if (name.includes('One')) {
    image = XBoxOne;
  } else if (name.includes('PC')) {
    image = PCLogo;
  } else if (name.includes('S/X')) {
    image = XBoxX;
  } else if (name.includes('Switch')) {
    image = Switch;
  } else if (name.includes('Linux')) {
    image = Linux;
  } else if (name.includes('iOS')) {
    image = iOs;
  }
  return image;
};
