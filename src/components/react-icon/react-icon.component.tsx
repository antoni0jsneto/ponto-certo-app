import { FunctionComponent } from 'react';
import { PiForkKnifeFill } from 'react-icons/pi';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa6';
import { BiSolidDrink } from 'react-icons/bi';
import { GoStarFill } from 'react-icons/go';
import { AiFillHome } from 'react-icons/ai';

interface ReactIconProps {
  name: string;
}

const ReactIcon: FunctionComponent<ReactIconProps> = ({ name }) => {
  switch (name) {
    case 'PiForkKnifeFill':
      return <PiForkKnifeFill />;
    case 'FaLaptopCode':
      return <FaLaptopCode />;
    case 'BiSolidDrink':
      return <BiSolidDrink />;
    case 'GoStarFill':
      return <GoStarFill />;
    case 'AiFillHome':
      return <AiFillHome />;
    case 'FaGraduationCap':
      return <FaGraduationCap />;

    default:
      return null;
  }
};

export default ReactIcon;
