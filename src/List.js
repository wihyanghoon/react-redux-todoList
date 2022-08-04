import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { delete_todo, toggle_todo } from './redux/modules/todo';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const List = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.todo);
    const navigate = useNavigate();

    const onDeleteTodo = (id) => {
        dispatch(delete_todo(id));
    };

    const onToggle = (id) => {
        dispatch(toggle_todo(id));
    }

    const ShowMore = (id) => {
        navigate(`deatail/${id}`)
    }

    return (
        <Wrapper>
            <h1>working</h1>
            <CardWrapper>
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                        return (
                            <Card>
                                <TextWrapper>
                                    <Deatail onClick={() => ShowMore(todo.id)}>자세히 보기</Deatail>
                                    <CardTitle>{todo.title}</CardTitle>
                                    <CardBody>{todo.body}</CardBody>
                                </TextWrapper>
                                <ButtonWrapper>
                                    <Button onClick={() => { onDeleteTodo(todo.id) }}>삭제</Button>
                                    <Button onClick={() => { onToggle(todo.id) }}>완료</Button>
                                </ButtonWrapper>
                            </Card>
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })}
            </CardWrapper>
            <h1>done</h1>
            <CardWrapper>
            {todos.map((todo) => {
                if (todo.isDone === true) {
                    return (
                        <Card>
                            <TextWrapper>
                                <Deatail onClick={() => ShowMore(todo.id)}>자세히 보기</Deatail>
                                <CardTitle>{todo.title}</CardTitle>
                                <CardBody>{todo.body}</CardBody>
                            </TextWrapper>
                            <ButtonWrapper>
                                <Button onClick={() => { onDeleteTodo(todo.id) }}>삭제</Button>
                                <Button onClick={() => { onToggle(todo.id) }}>취소</Button>
                            </ButtonWrapper>
                        </Card>
                    )
                } else {
                    return (
                        null
                    )
                }
            })}
            </CardWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`

const CardWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const Card = styled.div`
    width: 25%;
    border: 1px solid #bcbcbc;
    border-radius: 5px;
`

const TextWrapper = styled.div`
    padding: 10px;
`

const Deatail = styled.span`
    cursor: pointer;
    font-size: 12px;
    color: #333;
`

const CardTitle = styled.h4`
    font-size: 18px;
    line-height: 10px;
    color: #333;
`

const CardBody = styled.h4`
    font-size: 14px;
    color: #333;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 1px;
    width: 100%;
`

const Button = styled.button`
    width:50%;
    background-color: #0d6efd;
    border: none;
    padding: 6px 8px;
    color: #fff;
`
export default List