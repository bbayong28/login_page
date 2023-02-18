import React, { useEffect, useState } from 'react'

const User = {
  email: "test@example.com",
  pw:'test2323@@@'
}

const Login = () => {

  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [pwValid, setPwValid] = useState(false)
  const [notAllow, setNotAllow] = useState(true)

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const pwHandler = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  //emailValid과pwValid의 값이 변할 때 마다
  useEffect(() => { 
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    } else { 
      setNotAllow(true)
    }
  }, [emailValid, pwValid])

  const onClickonfirmButton = () => { 
    if (email === User.email && pw === User.pw) { 
      alert('로그인에 성공했습니다.')
    } else {
      alert('등록되지 않은 회원입니다. 아이디, 비밀번호를 다시 확인 하세요.')
    }
  }
  

  return (
    <div className='page'>
      <div className='titleWrap'>
        <p>
          이메일과 비밀번호를<br />입력해 주세요.
        </p>
      </div>
      <div className="contentWrap">
        <div className='inputTitle'>이메일 주소</div>
        <div className="inputWrap">
          <input
            type='text'
            className='input'
            placeholder='test@gmail.com'
            value={email}
            onChange={ emailHandler }
          />
        </div>
        <div className='errorMessageWrap'>
          <div>
            {
              !emailValid && email.length > 0 && (
                <div>
                  올바른 이메일을 입력해주세요.
                </div>
              )
            }
          </div>
        </div>
        <div className='inputTitle'>비밀번호</div>
        <div className='inputWrap'>
          <input
            type='password'
            className='input'
            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
            value={pw}
            onChange={ pwHandler }
          />
        </div>
        <div className='errorMessageWrap'>
          <div>
            {
              !pwValid && pw.length > 0 && (
                <div>
                  영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                </div>
              )
            }
          </div>          
        </div>
      </div>
      {/* <button disabled={true} className='bottomButton'>확인</button> */}
      <button onClick={onClickonfirmButton} disabled={notAllow} className='bottomButton'>확인</button>
    </div>
  )
}

export default Login