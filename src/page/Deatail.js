import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Deatail = () => {
    const { todos } = useSelector((state) => state.todo);
    const { id } = useParams();
    return (
        <Wrap>
            {todos.map((todo) => {
                if (todo.id === Number(id)) {
                    return (
                        <Container>
                            <Link to='/'>뒤로가기</Link>
                            <DeatailTitle>제목 : {todo.title}</DeatailTitle>
                            <DeatailBody>{todo.body}</DeatailBody>
                        </Container>
                    )
                } else {
                    return null
                }
            })}
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    min-height: 100vh;
`

const Container = styled.div`
    margin: auto;
    border: 1px solid #ced4da;
    width: 500px;
    height: 500px;
    padding: 20px;
    box-sizing: border-box;
`

const DeatailTitle = styled.h1`
    font-size: 24px;
`

const DeatailBody = styled.h2`
    font-weight: 100;
`


export default Deatail