"use client";

import TableUser from "@/component/app.table";
import useSWR from "swr";
import { useEffect } from "react";

const Users = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    return await res.json();
  };
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/api/user/getAll",
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
  return <TableUser users={data.content} />;
};

export default Users;
