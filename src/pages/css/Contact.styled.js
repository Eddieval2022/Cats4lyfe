import styled from "styled-components";

export const ContactForm = styled.form`
background-color: var(--color-3);

width: 600px;
height: 280px;

margin-top: 50px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
padding-bottom: 30px;
border-radius: 30px;
`;
export const InputWrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 5px;
flex-wrap: wrap;
h2 {
    font-size: 30px;
}
label {
    width: 35%;
}
input {
    width: 60%;
}
textarea {
    width: 60%;
    height: 150px;
    resize: none;
}
button {
    width: 40%;
}
`;