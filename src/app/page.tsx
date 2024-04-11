"use client";

import TableUser from "@/component/app.table";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
export default function Home() {
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
  if(!data) {
    return (
      <div>
        ...Loading
      </div>
    )
  }

  return (
    <div>
      <ul>
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <Link href="/tiktok">Tiktok</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
      </ul>
      <TableUser users={data.content} />
    </div>
  );
}
