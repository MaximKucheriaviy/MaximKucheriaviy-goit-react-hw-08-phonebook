import styled from "styled-components";

export const StyledMain = styled.main`
    & h1{
        margin-top: 50px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 61px;

        text-align: center;
    }

    & .subtitle{
        margin-top: 60px;
        text-align: center;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }

    & .about{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 222px;
        margin-top: 43px;
        & li{
            display: flex;
            align-items: center;
            box-sizing: border-box;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            &:not(:last-child){
                margin-bottom: 30px;
            }
            &::before{
                content: "";
                width: 20px;
                height: 18px;
                display: inline-flex;
                background-color: ${props => props.theme.primaryColor};
                border-radius: 50%;
                margin-right: 18px;
            }
        }
    }

    & .userForm{
        width: 414px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        
        & input{
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 40px;
            margin-top: 24px;
            padding-left: 20px;

            border-radius: 100px;
            border: none;
            background-color: white;

            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
        }

        & label{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            margin-top: 40px;
            padding-left: 16px;

            display: flex;
            align-items: flex-end;
            text-align: center;
        }
        & button{
            padding: 16px 32px;
            display: block;
            margin-left: auto;
            margin-right: auto;

            background: rgba(101, 91, 86, 0.21);
            border-radius: 100px;
            border: none;


            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            text-align: center;

            color: #F5F5F5;
        }

        & .errorMesage{
            height: 18px;
            margin-top: 22px;
            margin-bottom: 22px;

            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            color: #FF0707;
        }
    }

    & .contactLayout{
        margin-top: 35px;
        display: flex;
        justify-content: space-between;

        & .formThumb{
            padding-top: 118px;
        }

        & .userForm{
            margin-top: 0px;

            & .topLabel{
                margin-top: 0;
            }
        }
    }

    & .container{
        padding-top: 76px;
        width: 1164px;
        margin:0 auto;
    }
`