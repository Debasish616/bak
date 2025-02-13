 
"use client";
import { useRouter } from "next/navigation";
import { useWallets } from "@/app/axios";
import { useEffect, useState } from "react";
import { LoadingWrapper } from "@/app/components";
import { UseQueryOptions } from "react-query";
import { Button, Typography } from "@mui/joy";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function WalletPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const refetchIntervalFn: UseQueryOptions["refetchInterval"] = (
    _data,
    query,
  ) => {
    if (query.state.dataUpdateCount < 3) {
      return 2000;
    } else {
      setLoading(false);
      return false;
    }
  };
  const { data: wallets } = useWallets(undefined, refetchIntervalFn);

  useEffect(() => {
    if (wallets && wallets.data?.wallets?.length > 0) {
      // redirect to the first wallet
      const firstWallet = wallets.data.wallets[0];
      const walletId = firstWallet.id;
      router.push(`/wallets/${walletId}`);
    }
  }, [router, wallets]);

  return (
    <div className='flex flex-col pt-16 color-white text-center items-center h-1/2 px-6'>
      <LoadingWrapper isLoading={loading}>
        <Image
          src={"/ErrorIcon.svg"}
          height={100}
          width={100}
          alt='No wallets'
          className='mb-6'
        />

        <Typography level='title-lg' className='text-neutral-400 mb-1.5'>
          Something went wrong
        </Typography>
        <Typography
          level='body-md'
          fontWeight={500}
          className='text-neutral-400 mb-6'
        >
          Sign out and restart the app to try again
        </Typography>

        <Button className='w-full' onClick={() => signOut()}>
          Sign out
        </Button>
      </LoadingWrapper>
    </div>
  );
}
