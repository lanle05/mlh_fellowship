import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import jwt_decode from "jwt-decode";

export default class JWTDecoder {
  static decode(token: string) {
    if (typeof window !== undefined) {
      return JSON.parse(window.atob(token.split(".")[1]));
    }
  }
}



export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log(context);

  if(context.req){
    const { Jwttoken } = context.req.cookies;
    const token = jwt_decode(Jwttoken as string);
    console.log(Jwttoken);
  }
  // if(user !== undefined && user.category === "parent"){
  //     return { 
  //         redirect:{
  //             destination: '/parent',
  //             permanent: false,
  //         }
  //     }
  // }

  // if(user !== undefined && user.userType === "student"){
  //     return { 
  //         redirect:{
  //             destination: '/student',
  //             permanent: false,
  //         }
  //     }
  // }

  // if(user !== undefined && user.userType === "teacher"){
  //     return { 
  //         redirect:{
  //             destination: '/teacher',
  //             permanent: false,
  //         }
  //     }
  // }

  // if(user === undefined){
  //     return { 
  //         redirect:{
  //             destination: '/sign-in',
  //             permanent: false,
  //         }
  //     }
  // }

  return {
      props:{
      }
  }
}