import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Card = styled.div`
    background: #fff;
    width: 34rem;
    border-radius: 8px;
    padding: 1.5rem;
    margin-top: 1rem;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);

    h2{
        font-size: 1.2rem;
        color: #392D2D;
        margin-bottom: 0.5rem;
    }
`;

export const Templates = styled.div`
    width: 100%;
    height: 90px;
    background: #eee;
    border-radius: 8px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 1.8rem;

    button{
        background: transparent;
        margin-right: 0.5rem;
        border: 2px solid transparent;

        &.selected{ 
            border-color: #4395D8;
        }

        img{       
            width: 53px;
            height:  53px;   
        }
    }
`;

export const Form = styled.form`
    input{
       width: 100%;
       height: 40px;
       border-radius: 8px; 
       border: 1px solid #DBDBDB;
       padding: 0 15px;
       font-size: 14px;
       margin-bottom: 10px;
    }

`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 0;
    background: #4395D8;
    color: #FFF;
    font-weight: bold; 
    transition: background 0.2s ease-in;
    font-size: 14px;
   
    &:hover{
        background: #3672A3;
    }
`;