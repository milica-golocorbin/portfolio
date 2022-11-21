import Link from "next/link";

type Props = {
  route: string;
  children?: React.ReactNode;
};

const ButtonPrimary = ({ route, children }: Props) => {
  return (
    <Link
      href={route}
      className="inline-block px-2 py-3 text-xs font-semibold text-white uppercase rounded sm:text-base bg-slate-800 shadow-lg hover:translate-y-0.5 hover:bg-slate-700 dark:hover:bg-slate-900"
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
