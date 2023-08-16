"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { kakaoLogin } from "../../../../apis/account";

interface Props {
  searchParams?: {
    code?: string;
  };
}

export default function Page(props: Props) {
  const { searchParams } = props;
  const code = searchParams?.code;
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    async function redirectTo() {
      try {
        const response = await kakaoLogin(code);
        if (response.data?.memberId) {
          redirect("/?success=true");
        }
        console.log(response);
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      }
    }
    redirectTo();
  }, [code]);

  return <div>error: {errorMessage}</div>;
  // try {
  //   const response = await kakaoLogin(code)
  //   if(response.data?.memberId) {
  //     redirect('/')
  //   }
  //   redirect('/account/signin?error_code=401')
  // } catch(error) {
  //   console.error(error)
  //   redirect('/account/signin?error_message=' + error.message)
  // }
}
