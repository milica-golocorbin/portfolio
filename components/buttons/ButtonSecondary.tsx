import Link from "next/link";

type Props = {
  route: string;
  children?: React.ReactNode;
};

const ButtonSecondary = ({ route, children }: Props) => {
  return (
    <Link
      href={route}
      className="inline-block px-2 py-3 text-xs font-semibold uppercase bg-teal-600 rounded sm:text-base text-slate-900 shadow-lg hover:translate-y-0.5 hover:bg-teal-500"
    >
      {children}
    </Link>
  );
};

export default ButtonSecondary;
