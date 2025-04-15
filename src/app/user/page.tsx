import userUseCase from '@/application/users';
import { User } from '@/domain/models/users/user';
import Link from 'next/link';

// サーバーコンポーネント（デフォルト）
const UserList = async () => {
  // サーバーサイドで直接データをフェッチ
  const users = await userUseCase.findAll();

  return (
    <div>
      <h1>ユーザー一覧</h1>
      {users?.map((user: User) => (
        <div key={user.id} className="user-item">
          <h2>{user.name}</h2>
          <p>{user.mailAddress}</p>
          <Link href={`/user/detail/${user.id}`}>詳細を見る</Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
