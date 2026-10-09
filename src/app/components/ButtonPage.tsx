'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ButtonPage = () => {
  const {data:session} = authClient.useSession()
  return (
    <div>
      { session?.user? <div>
      <div className="avatar avatar-online">
  <div className="w-24 rounded-full">
    <Image
      src={session?.user?.image || "/assets/default-avatar.png"}
      alt="User Image"
      width={96}
      height={96}
      className="rounded-full"
    />
  </div>
</div>
  <h1>{session?.user?.name} </h1>
<Button onClick={()=> authClient.signOut() }>সাইন আউট</Button>
      </div>:
<div>
     <Link
              href="/sign-in"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              সাইন ইন
            </Link>

            <Link href="/sign-up">
              <Button
                className="rounded-lg bg-black px-5 py-2 font-semibold text-white transition hover:bg-gray-800"
              >
                সাইন আপ
              </Button>
            </Link>   
</div>
}   
    </div>
  );
};

export default ButtonPage;