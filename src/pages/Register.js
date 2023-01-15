import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(240, 182, 71, 0.2)),
    url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  border-radius: 8px;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  height: 25px;
  padding: 8px;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: bolder;
  word-spacing: 4px;
`
const Agreement = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin: 20px 0px;
  width: 100%;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f59ea0;
  }
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="E-Mail" />
          <Input placeholder="UserName" />
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Password" />
          <Input placeholder="ConfirmPassword" />
          <Agreement>
            ProductList' is defined but never used no-unused-vars
          </Agreement>
          <Button>Register!</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
