import { useRouter } from 'next/router';
import React,{useEffect,useState} from 'react';
import { Dispatch } from 'redux';
import { Oval } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux';
import CookieManager from '../../utils/cookieManager';
import { userTypes } from '../../redux/user/user.types';

const mapState = (state:any) => ({
  accessToken:state.user.accessToken,
  success:state.user.success
})
function EditModal() {
  const {accessToken,success} = useSelector(mapState);
  const dispatch:Dispatch<any> = useDispatch();
  const [seconds, setSeconds] = useState(4);
  const router  = useRouter();

  useEffect(() => {
    CookieManager.deleteCookie("Jwttoken");
    dispatch({
      type:userTypes.SET_USER_SUCCESS,
      payload:false
    })
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(!success && seconds == 0){
      router.push('/sign-in');
    }
  },[success,seconds, router])

  return (
    <div className='edit-modal-container'>
      <div className='overlay'></div>
      <div className="timer-container">
          <Oval
          height={80}
          width={80}
          color="#FFD433"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#FFD433"
          strokeWidth={2}
          strokeWidthSecondary={2} 
        />
        <p>
          redirected to login in {seconds}s to update your profile
        </p>
      </div>

    </div>
  )
}

export default EditModal