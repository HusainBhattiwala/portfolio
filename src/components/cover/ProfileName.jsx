import Link from "next/link";
import Button from "../ui/Button";
import { Github } from "lucide-react";

const ProfileName = ({}) => {
  return (
    <div className='text-3xl flex flex-col font-bold text-highlight'>
      Husain Bhattiwala
      <div className='text-sm font-thin flex justify-between items-center'>
        @ezCodeBits
        <Link
          className='block md:hidden'
          href='https://github.com/HusainBhattiwala'
          target='_blank'
        >
          <Button variant='primary' sizes={"iconOnly"}>
            <Github />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileName;
