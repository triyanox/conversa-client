import Link from "next/link";
type Props = {
  name?: string;
  src?: string;
};
type PropsWithLink = {
  name?: string;
  src?: string;
  link: string;
};
export const AvatarWithLink = (props: PropsWithLink) => {
  const { src, name } = props;
  if (src && src.length > 0) {
    return (
      <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg">
        <img
          className="absolute w-full h-full object-cover"
          src={src}
          alt={name}
        />
      </div>
    );
  }
  return (
    <Link href={props.link}>
      <a className=" cursor-pointer flex justify-center items-center w-12 rounded-full font-bold text-xl md:text-2xl h-12 bg-black text-white dark:bg-white dark:text-black">
        {name ? name[0].toUpperCase() : "C"}
      </a>
    </Link>
  );
};

const Avatar = (props: Props) => {
  const { src, name } = props;
  if (src && src.length > 0) {
    return (
      <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg">
        <img
          className="absolute w-full h-full object-cover"
          src={src}
          alt={name}
        />
      </div>
    );
  }
  return (
    <div className=" flex justify-center items-center w-12 rounded-full font-bold text-xl md:text-2xl h-12 bg-black text-white dark:bg-white dark:text-black">
      {name ? name[0].toUpperCase() : "C"}
    </div>
  );
};

export default Avatar;
