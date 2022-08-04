import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "./redux/modules/todo";
import List from './List';
import styled from 'styled-components';

const Form = () => {
    const dispatch = useDispatch()
    const [titleValue, setTitleValue] = useState("")
    const [bodyValue, setBodyValue] = useState("")

    const onClickHandler = (e) => {
        e.preventDefault();
        if (titleValue.trim() === "" && bodyValue.trim() === "") return
        dispatch(add_todo(titleValue, bodyValue));
        setTitleValue("");
        setBodyValue("");
    }
    return (
        <div>
            <InputWrapper onSubmit={onClickHandler}>
                <InputTitle placeholder='제목을 입력하세요.' name="title" type="text" onChange={(e) => { setTitleValue(e.target.value) }} value={titleValue} />
                <InputTitle placeholder='내용을 입력하세요.' name="body" type="text" onChange={(e) => { setBodyValue(e.target.value) }} value={bodyValue} />
                <Button>Submit</Button>
            </InputWrapper>
            <List></List>
        </div>
    )
}

const InputWrapper = styled.form`
    display: flex;
    justify-content: center;
`

const InputTitle = styled.input`
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid #ced4da;
    transition: ease-in-out,box-shadow .15s ease-in-out;
    margin-right: 5px;
`

const Button = styled.button`
    border: none;
    background-color: #0d6efd;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
`


export default Form