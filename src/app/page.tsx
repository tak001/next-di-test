import Link from 'next/link';

const index = () => {
  return (
    <>
      <Link href="/user">
        <p>to User</p>
      </Link>
    </>
  );
};

export default index;
