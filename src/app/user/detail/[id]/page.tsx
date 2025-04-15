import userUseCase from '@/application/users';
import { User } from '@/domain/models/users/user';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 動的ルートパラメータの型定義
type Props = {
  params: {
    id: string;
  };
};

/**
 * ユーザー情報を取得する
 * @param {number} userId - 取得するユーザーのID
 * @returns {Promise<User|undefined>} 取得したユーザー情報、または取得失敗時はundefined
 */
const fetchUserById = async (userId: number): Promise<User | undefined> => {
  try {
    return await userUseCase.find({ id: userId });
  } catch (error) {
    console.error('ユーザー取得エラー:', error);
    return undefined;
  }
};

// サーバーコンポーネント
const UserDetailPage = async ({ params }: Props) => {
  // paramsからidを取得して数値に変換
  const userId = Number(params.id);

  // サーバーサイドでデータフェッチ
  const user = await fetchUserById(userId);

  // ユーザーが見つからない場合は404ページに遷移
  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>ユーザー詳細</h1>
      <div>
        <p>ID: {user.id}</p>
        <p>名前: {user.name}</p>
        <p>メールアドレス: {user.mailAddress}</p>
      </div>
      <div>
        <Link href="/user">ユーザー一覧に戻る</Link>
      </div>
    </div>
  );
};

export default UserDetailPage;
