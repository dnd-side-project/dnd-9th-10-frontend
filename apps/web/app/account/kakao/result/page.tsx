import { redirect } from "next/navigation";
import { kakaoLogin } from "../../../../apis/account";

type Props = {
  searchParams?: {
    code?: string;
  };
};


export default async function Page(props: Props) {
  const { searchParams } = props
  console.log(props)
  const code = searchParams?.code

  try {
    const response = await kakaoLogin(code)
    if(response.data?.memberId) {
      redirect('/')
    }
    redirect('/account/signin?error_code=401')
  } catch(error) {
    console.error(error)
    redirect('/account/signin?error_message=' + error.message)
  }
}
