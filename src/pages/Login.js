import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(240, 182, 71, 0.2)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  border-radius: 8px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;

  margin: 10px 10px 10px 0px;
  height: 25px;
  padding: 8px;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: bolder;
  word-spacing: 4px;
  margin-bottom: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f59ea0;
  }
`
const Link = styled.a`
  margin-bottom: 10px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN TO CONTINUE!</Title>
        <Form>
          <Input placeholder="UserName" />

          <Input placeholder="Password" />

          <Button>Sign In!</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
