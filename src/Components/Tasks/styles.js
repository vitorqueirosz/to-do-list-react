import styled from 'styled-components';
// import Modal from 'react-modal';
// import { CloseButton } from './index';

export const Container = styled.div`
    margin: auto;
    background: #9966cc;
    max-width: 450px;
    height: 118px;
    border-radius: 4px;
    box-shadow: 2px 4px 8px 4px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
    margin: 50px auto;
    /* background: #9393; */
    max-width: 450px;
    height: 70%;
    position: relative;
    /* border-left: 1px solid #eee; */

    h1 {
        color: #ffffff;
        font-size: 25px;
        display: flex;
        align-self: end;
        margin-top: 50px;
        justify-content: center;
        /* margin-right: 10px; */
        padding-top: 20px;
    }
    span {
        color: #ffffff;
        /* display: inline; */
        /* align-self: flex-end; */
        margin-bottom: 50px;
        font-size: 20px;

        &:nth-child(2) {
            font-size: 60px;
            margin-left: 100px;
        }
    }
`;
// export const SubmitContainer = styled.li`
//     border: 1px solid #eee;
//     max-width: 600px;
//     height: 26px;
//     /* display: inline; */
//     padding: 4px;
//     list-style: none;
//     position: relative;
// `;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    background: #cd1083;
    border: 0;
    padding: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    float: right;
    margin: 30px 25px 0px 0px;
    /* position: absolute; */
    &:hover {
        background: #933999;
    }
`;

export const List = styled.ul`
    display: inline;
    align-items: center;
    justify-content: center;

    li {
        border: 1px solid #eee;
        padding: 28px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #666;
        font-size: 16px;
        font-weight: 600;
        position: relative;
        background: #fff;

        box-shadow: 1px 8px 8px 1px rgba(1, 0, 0, 0.2);

        :nth-child(1) {
            border-radius: 4px 4px 0 0;
        }
        :nth-last-child(1) {
            border-radius: 0 0 4px 4px;
        }
        /* text-decoration: ${(props) =>
            props.done ? 'line-through' : 'none'}; */

        /* text-decoration: line-through */
    }
    p {
        font-size: 35px;
    }
    svg {
        cursor: pointer;
        margin: 0 0 5px 3px;
        display: inline-block;
        align-items: center;
    }
`;
export const ItemList = styled.div.attrs(() => ({
    // disabled: props.doneCount,
}))`
    /* text-decoration: ${(props) => (props.setDone ? 'line-through' : 'none')};
    color: ${(props) => (props.done ? '#999' : '#666')}; */
    align-self: flex-start;

    label {
        padding-left: 30px;
        display: inline-block;
        position: relative;
        cursor: pointer;
        margin-bottom: 15px;
        font-family: sans-serif;
    }

    input {
        border-radius: 3px;
        /* margin: 15px 5px 0 0; */

        display: inline-block;
        width: 20px;
        height: 20px;
        background: #000;
        position: absolute;
        left: 0;
        top: 0;
        margin-bottom: 20px;

        input:checked {
            background-color: #939;
        }
    }
    /* text-decoration: line-through; */
`;
export const LinkButtons = styled.div``;

export const Modal = styled.div`
    padding: 20px 0 50px 20px;
    max-width: 700px;
    width: 700px;
    margin-right: 100px;
    align-self: center;

    background: #d3d3d3;
    position: absolute;
    border: 1px solid #000;

    input {
        width: 80%;
        padding: 15px;
        background: #fff;
        border: none;
        margin-bottom: 10px;
        border-radius: 4px;
        font-size: 17px;
        ::placeholder {
            color: #666;
            font-weight: bold;
        }
    }
    textarea {
        display: inline-block;
        padding: 10px;
        flex: 1;
        width: 378px;
        height: 90px;
        display: inline-block;
        margin-bottom: 10px;
        border-radius: 4px;
        border: none;
        font-size: 18px;

        ::placeholder {
            color: #666;
            font-weight: bold;
        }
    }
    button {
        padding: 25px;
        border: none;
        background: #cd1083;
        border-radius: 4px;
        color: #fff;
        float: right;
        /* margin-top: 25px; */
        margin-right: 136px;
        font-weight: bold;

        &:nth-child(2) {
            padding: 5px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            float: right;
            cursor: pointer;
            margin: 0 10px 0 20px;
        }
    }
`;

export const CloseButton = styled.button`
    float: right;
    cursor: pointer;
    border-radius: 4px;
    /* padding: 2px; */
    width: 28px;
    border: 0;
    color: #fff;
    height: 25px;
    background: #cd1083;
`;
