import Image from "next/image";
import { logoItem as logo } from "@/data/data";

type Props = {
  parentClassName?: string;
  attribute: any;
  className?: string;
};

const Logo = ({ parentClassName, attribute, className }: Props) => {
  return (
    <div className={parentClassName}>
      <Image
        src={logo}
        alt="Siptea Logo"
        {...attribute}
        className={className}
      />
    </div>
  );
};

export default Logo;
