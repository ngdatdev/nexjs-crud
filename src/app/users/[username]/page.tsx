'use client'
import useSWR, { Fetcher } from "swr";

interface IProp {
  params: {
    username: string;
  };
}

const ViewDetailUser = (props: IProp) => {
  const username = props.params.username;
  const fetcher: Fetcher<IUser, string> = async (url: string) => {
    const res = await fetch(url);
    return await res.json();
  };
  const { data, error, isLoading } = useSWR(
    `http://localhost:8080/api/user/me/${username}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (!data) {
    return <div>...Loading</div>;
  }
  return <div>view detail user {data.name}</div>;
};

export default ViewDetailUser;
