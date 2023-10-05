import Image from "next/image";

const ProfilePic = ({}) => {
  return (
    <div className=''>
      <Image
        alt='Husain Bhattiwala'
        src='/images/HusainBhattiwala.jpg'
        height={120}
        width={120}
        className='object-cover border-4 border-white rounded-full shadow-md'
      />
    </div>
  );
};

export default ProfilePic;
